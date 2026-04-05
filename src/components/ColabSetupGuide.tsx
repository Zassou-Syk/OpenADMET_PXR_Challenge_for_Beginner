import React from 'react';
import { Cloud, Key, Play, ExternalLink, Info, CheckCircle2, Terminal, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function ColabSetupGuide() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Google Colab × AI Studio 連携ガイド</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          ブラウザだけでPythonを実行できる「Google Colab」と、最強のAI「Gemini」を連携させる手順を解説します。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {/* Step 1: Open Colab */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 font-bold text-xl">
              1
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Google Colabを開く</h3>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>まずはGoogle Colabにアクセスして、新しいノートブックを作成しましょう。</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://colab.research.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
              >
                <Cloud className="w-5 h-5" />
                Google Colabを開く
              </a>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm">
                「ノートブックを新規作成」をクリックすると、Pythonコードを書くための真っ白な画面が表示されます。
              </p>
            </div>
          </div>
        </section>

        {/* Step 2: Get API Key */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl">
              2
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Gemini APIキーを取得する</h3>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>AI StudioからGeminiを動かすための「鍵（APIキー）」を取得します。</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <Key className="w-5 h-5" />
                APIキーを取得する
              </a>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>注意：</strong> 取得したAPIキーはパスワードと同じくらい重要です。他人に教えたり、GitHubにそのまま公開したりしないでください。
              </p>
            </div>
          </div>
        </section>

        {/* Step 3: Set Secret in Colab */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-bold text-xl">
              3
            </div>
            <h3 className="text-2xl font-bold text-slate-900">ColabにAPIキーを保存する</h3>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>Colabの「シークレット（鍵アイコン）」機能を使って、安全にAPIキーを設定します。</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-400">1</div>
                <p className="text-sm">左側のメニューにある <strong>鍵アイコン（シークレット）</strong> をクリックします。</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-400">2</div>
                <p className="text-sm">「新しいシークレットを追加」をクリックし、名前に <code>GOOGLE_API_KEY</code>、値に取得したAPIキーを入力します。</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-400">3</div>
                <p className="text-sm"><strong>「ノートブックからのアクセス」</strong> のスイッチをONにします。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Run Code */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 font-bold text-xl">
              4
            </div>
            <h3 className="text-2xl font-bold text-slate-900">実際にコードを動かしてみる</h3>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>Colabのセルに以下のコードを貼り付けて、再生ボタン（実行）を押してみましょう！</p>
            <div className="bg-slate-900 p-6 rounded-2xl font-mono text-blue-300 overflow-x-auto">
              <pre className="text-xs">
                {`# 1. ライブラリのインストール
!pip install -q -U google-generativeai

# 2. APIキーの読み込み
from google.colab import userdata
import google.generativeai as genai

api_key = userdata.get('GOOGLE_API_KEY')
genai.configure(api_key=api_key)

# 3. Geminiに質問してみる
model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content("こんにちは！自己紹介してください。")
print(response.text)`}
              </pre>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-800 font-medium">
                Geminiからの返答が表示されれば、連携成功です！
              </p>
            </div>
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            もっと詳しく知りたい方へ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://zenn.dev/google_cloud_jp/articles/google-ai-studio-colab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all group"
            >
              <div className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">AI StudioとColabの連携（Zenn）</div>
              <p className="text-xs text-slate-500 mb-4">画像付きで非常に分かりやすく解説されているブログ記事です。</p>
              <div className="text-blue-600 text-xs font-bold flex items-center gap-1">
                記事を読む <ExternalLink className="w-3 h-3" />
              </div>
            </a>
            <a 
              href="https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=ja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all group"
            >
              <div className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">公式クイックスタート</div>
              <p className="text-xs text-slate-500 mb-4">Google公式のドキュメントです。最新の情報を確認できます。</p>
              <div className="text-blue-600 text-xs font-bold flex items-center gap-1">
                公式ドキュメント <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
