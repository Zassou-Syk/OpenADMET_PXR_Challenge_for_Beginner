import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Search, FlaskConical, Loader2, AlertCircle, Send, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function GeminiPredictor() {
  const [smiles, setSmiles] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smiles.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `
          あなたは優秀なケモインフォマティクスの専門家です。
          以下のSMILES記法で表される分子について、PXR（プレグナンX受容体）誘導能を持つ可能性を予測し、その理由を化学的構造の観点から説明してください。
          
          SMILES: ${smiles}
          
          回答は以下の形式で、日本語でお願いします：
          1. 予測結果（誘導能あり/なし/不明）
          2. 化学的構造に基づいた理由（水素結合供与体/受容体、脂溶性、官能基など）
          3. 注意事項（AIによる予測であることの明記）
        `,
      });

      setResult(response.text || "結果を取得できませんでした。");
    } catch (err) {
      console.error(err);
      setError("予測中にエラーが発生しました。SMILESが正しいか確認してください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 rounded-xl text-white">
            <FlaskConical className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Gemini PXR 予測プロトタイプ</h2>
        </div>
        <p className="text-gray-600">
          SMILES記法を入力して、GeminiにPXR誘導能の可能性を分析させることができます。
          これは学習のためのツールであり、実際のチャレンジの提出物ではありません。
        </p>
      </div>

      <div className="p-8">
        <form onSubmit={handlePredict} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={smiles}
                onChange={(e) => setSmiles(e.target.value)}
                placeholder="例: CC(=O)OC1=CC=CC=C1C(=O)O (アスピリン)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
            <button
              type="submit"
              disabled={loading || !smiles.trim()}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
              予測を開始
            </button>
          </div>
        </form>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center py-12 text-gray-500"
            >
              <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
              <p className="text-lg font-medium">Geminiが化学構造を分析中...</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-red-50 border border-red-100 text-red-700 flex items-start gap-4"
            >
              <AlertCircle className="w-6 h-6 shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 prose prose-blue max-w-none">
                <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-wider text-sm">
                  <Info className="w-4 h-4" />
                  Geminiの分析結果
                </div>
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
              
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>
                  この結果はGeminiによる推論であり、実験的な事実を保証するものではありません。
                  OpenADMETチャレンジでは、実際のデータセットを用いてモデルを構築する必要があります。
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
