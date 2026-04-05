import React from 'react';
import { FlaskConical, GraduationCap, BookOpen, ExternalLink, Github, Database, Code, LayoutDashboard, Terminal, Cpu, Cloud, Monitor, Zap, Target, Table, Lightbulb } from 'lucide-react';
import Roadmap from './components/Roadmap';
import GeminiPredictor from './components/GeminiPredictor';
import EnvironmentGuide from './components/EnvironmentGuide';
import LearningFocus from './components/LearningFocus';
import FAQ from './components/FAQ';
import BackupGuide from './components/BackupGuide';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white">
              <FlaskConical className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">PXR Challenge Assistant</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#roadmap" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">ロードマップ</a>
            <a href="#learning-focus" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">学習のポイント</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Q&A</a>
            <a href="#backup" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">バックアップ</a>
            <a href="#code-execution" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Code Execution</a>
            <a href="#environment" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">実行環境</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100"
          >
            <GraduationCap className="w-4 h-4" />
            初心者向け学習ガイド
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          >
            OpenADMET PXR チャレンジへようこそ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed"
          >
            Google AI Studio、GitHub、Pythonが初めての方でも大丈夫です。
            このアシスタントが、PXR誘導能予測チャレンジへの第一歩をサポートします。
          </motion.p>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="scroll-mt-24">
          <Roadmap />
        </section>

        {/* Learning Focus Section */}
        <section id="learning-focus" className="scroll-mt-24">
          <LearningFocus />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-24">
          <FAQ />
        </section>

        {/* Backup Section */}
        <section id="backup" className="scroll-mt-24">
          <BackupGuide />
        </section>

        {/* Code Execution Section */}
        <section id="code-execution" className="scroll-mt-24 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-2xl text-white">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Google AI StudioのCode Execution機能を使いこなす</h2>
              <p className="text-slate-600">AIにPythonコードを書かせ、その場で実行結果を確認する最強の学習法です。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">なぜCode Executionが最適なのか？</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-600">
                  <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>AIが書いたコードが「本当に動くか」をその場で検証できます。</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>エラーが出てもAIが自動で修正し、正しいコードを導き出します。</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>RDKitなどのライブラリを使った複雑な化学データ処理も、AIに任せられます。</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">AI Studioでのプロンプト例</h3>
              <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-sm text-slate-700">
                "RDKitを使って、SMILES記法から分子量とLogPを計算するPythonコードを書いて、実行結果を表示してください。"
              </div>
              <p className="mt-4 text-sm text-slate-500 italic">
                ※AI Studioの右側の設定パネルで「Code Execution」をONにすることを忘れずに！
              </p>
            </div>
          </div>
        </section>

        {/* Environment Section */}
        <section id="environment" className="scroll-mt-24">
          <EnvironmentGuide />
        </section>

        {/* Predictor Section */}
        <section id="predictor" className="scroll-mt-24 max-w-4xl mx-auto">
          <GeminiPredictor />
        </section>

        {/* Resources Section */}
        <section id="resources" className="scroll-mt-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">重要リソースライブラリ</h2>
            <p className="text-slate-600">チャレンジに役立つ公式ドキュメントやツールへのリンク集です。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              title="OpenADMET Challenge"
              description="チャレンジの公式発表と詳細。データセットの入手方法もこちらから。"
              icon={<Database className="w-6 h-6" />}
              url="https://openadmet.ghost.io/announcing-the-next-openadmet-blind-challenge-predicting-pxr-induction/"
              color="bg-emerald-50 text-emerald-600"
            />
            <ResourceCard
              title="Google AI Studio"
              description="Geminiモデルをノーコードで試せる環境。プロンプト作成に最適です。"
              icon={<LayoutDashboard className="w-6 h-6" />}
              url="https://aistudio.google.com/"
              color="bg-blue-50 text-blue-600"
            />
            <ResourceCard
              title="RDKit Documentation"
              description="Pythonで化学構造を扱うための必須ライブラリ。SMILESの処理に使います。"
              icon={<Code className="w-6 h-6" />}
              url="https://www.rdkit.org/docs/index.html"
              color="bg-purple-50 text-purple-600"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-12 border-t border-slate-200 text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-slate-500">
            &copy; 2026 PXR Challenge Assistant. Created for educational purposes.
          </p>
        </footer>
      </main>
    </div>
  );
}

function ResourceCard({ title, description, icon, url, color }: { title: string; description: string; icon: React.ReactNode; url: string; color: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all space-y-4"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
          {title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </a>
  );
}
