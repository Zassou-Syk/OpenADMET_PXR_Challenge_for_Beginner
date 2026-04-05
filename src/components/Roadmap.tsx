import React from 'react';
import { CheckCircle2, Circle, BookOpen, Code, FlaskConical, Github } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    title: "Step 1: Pythonの基礎を学ぶ",
    description: "データ分析の標準言語であるPythonの基本文法、リスト、辞書、そしてデータ操作ライブラリのPandasを学びます。",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    resources: [
      { name: "Python公式チュートリアル", url: "https://docs.python.org/ja/3/tutorial/" },
      { name: "Pandas 10分間入門", url: "https://pandas.pydata.org/docs/user_guide/10min.html" }
    ]
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
