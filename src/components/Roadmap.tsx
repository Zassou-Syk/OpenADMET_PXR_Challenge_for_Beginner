import React, { useState } from 'react';
import { CheckCircle2, Circle, BookOpen, Code, FlaskConical, Github, Terminal, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    title: "Step 1: Pythonの基礎を学ぶ",
    description: "データ分析の標準言語であるPythonの基本文法、リスト、辞書、そしてデータ操作ライブラリのPandasを学びます。",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    resources: [
      { name: "Python公式チュートリアル", url: "https://docs.python.org/ja/3/tutorial/" },
      { name: "Pandas 10分間入門", url: "https://pandas.pydata.org/docs/user_guide/10min.html" }
    ],
    exercise: {
      title: "演習：PXRチャレンジのデータを読み込んでみよう",
      description: "Hugging Faceで公開されているPXRチャレンジのデータセット（train.csv と test.csv）をpandasで読み込み、データの最初の5行を表示してみましょう。",
      hint: "Hugging FaceのRaw URL（resolve/main/...）を使用すると、直接pandasで読み込むことができます。",
      code: `import pandas as pd

# Hugging FaceのRaw URL
train_url = "https://huggingface.co/datasets/openadmet/pxr-challenge-train-test/resolve/main/train.csv"
test_url = "https://huggingface.co/datasets/openadmet/pxr-challenge-train-test/resolve/main/test.csv"

# データの読み込み
train_df = pd.read_csv(train_url)
test_df = pd.read_csv(test_url)

# 最初の5行を表示
print(train_df.head())`
    }
  },
  {
    title: "Step 2: Google AI StudioとGemini API",
    description: "Geminiモデルを直接操作し、プロンプトエンジニアリングによって化学構造（SMILES）から性質を推論させる方法を学びます。",
    icon: <BookOpen className="w-6 h-6 text-purple-500" />,
    resources: [
      { name: "Google AI Studio クイックスタート", url: "https://ai.google.dev/gemini-api/docs/quickstart?hl=ja" }
    ]
  },
  {
    title: "Step 3: ケモインフォマティクス（化学情報学）の基礎",
    description: "分子構造を文字列で表現するSMILES記法や、Pythonで化学データを扱うためのRDKitライブラリについて学びます。",
    icon: <FlaskConical className="w-6 h-6 text-green-500" />,
    resources: [
      { name: "SMILES記法とは", url: "https://ja.wikipedia.org/wiki/SMILES%E8%A8%98%E6%B3%95" },
      { name: "RDKit 入門", url: "https://www.rdkit.org/docs/GettingStartedInPython.html" }
    ]
  },
  {
    title: "Step 4: GitHubでのコード管理",
    description: "作成したモデルやコードをGitHubで管理し、世界中の研究者と共有・協力する方法を学びます。",
    icon: <Github className="w-6 h-6 text-gray-800" />,
    resources: [
      { name: "GitHub 基礎", url: "https://docs.github.com/ja/get-started" }
    ]
  },
  {
    title: "Step 5: 機械学習モデルの構築",
    description: "Scikit-learnなどのライブラリを使い、PXR誘導能を予測する分類モデルを実際に構築します。",
    icon: <CheckCircle2 className="w-6 h-6 text-orange-500" />,
    resources: [
      { name: "Scikit-learn チュートリアル", url: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html" }
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">学習ロードマップ</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          PXR誘導予測チャレンジに参加するために、以下のステップで学習を進めることをお勧めします。
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-gray-50 shadow-sm shrink-0">
                {step.icon}
              </div>
              
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {step.resources.map((resource, rIndex) => (
                    <a
                      key={rIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {resource.name}
                    </a>
                  ))}
                </div>

                {step.exercise && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-5 h-5 text-slate-700" />
                      <h4 className="font-bold text-slate-900">{step.exercise.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{step.exercise.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <p className="text-xs text-amber-700"><strong>ヒント:</strong> {step.exercise.hint}</p>
                    </div>

                    <SolutionToggle code={step.exercise.code} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionToggle({ code }: { code: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
      >
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        解答例を確認する
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto">
              <code>{code}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
