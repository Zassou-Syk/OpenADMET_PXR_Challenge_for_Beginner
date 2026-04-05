import React from 'react';
import { Monitor, Cloud, Check, X, Terminal, Cpu, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const environments = [
  {
    name: "Google Colab",
    icon: <Cloud className="w-6 h-6 text-orange-500" />,
    pros: [
      "環境構築が不要（ブラウザだけで完結）",
      "無料のGPU（T4など）が利用可能",
      "Chempropなどの深層学習も無料で動かせる",
      "Google AI Studioで生成したコードをコピペして即実行できる"
    ],
    cons: [
      "一定時間操作がないと接続が切れる",
      "データの保存にGoogle Driveとの連携が必要",
      "無料枠には時間制限がある"
    ],
    recommendation: "初心者に最適！まずはここから始めましょう。"
  },
  {
    name: "ローカルPC環境",
    icon: <Monitor className="w-6 h-6 text-blue-500" />,
    pros: [
      "時間制限なく、オフラインでも作業可能",
      "自分のPCのファイルを直接扱える",
      "VS Codeなどの強力なエディタが使える",
      "長期的なプロジェクト管理に向いている"
    ],
    cons: [
      "環境構築（インストール）に手間がかかる",
      "深層学習には高性能なGPU（NVIDIA製など）が必要",
      "エラーが出た時の解決が少し難しい"
    ],
    recommendation: "Colabに慣れてきて、本格的に研究を進めたくなったら構築しましょう。"
  }
];

export default function EnvironmentGuide() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">実行環境の選び方</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Chempropのような深層学習モデルも、Google Colabを使えば無料で体験可能です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {environments.map((env, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                {env.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{env.name}</h3>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> メリット
                </h4>
                <ul className="space-y-2">
                  {env.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <X className="w-4 h-4" /> デメリット
                </h4>
                <ul className="space-y-2">
                  {env.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-blue-800 font-medium text-center">
              {env.recommendation}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chemprop Setup Guide */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6">
        <div className="flex items-center gap-3">
          <Terminal className="w-8 h-8 text-blue-400" />
          <h3 className="text-2xl font-bold">ChempropをColabで動かす魔法のコマンド</h3>
        </div>
        <p className="text-slate-400">
          Google Colabのセルに以下のコードを貼り付けて実行するだけで、Chempropの環境が整います。
        </p>
        <div className="bg-slate-800 p-6 rounded-2xl font-mono text-blue-300 overflow-x-auto">
          <pre>
            {`# 1. RDKitとChempropのインストール
!pip install rdkit chemprop

# 2. GPUが使えるか確認
import torch
print(f"GPU available: {torch.cuda.is_available()}")`}
          </pre>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Cpu className="w-4 h-4" />
          <span>※Colabのメニュー「ランタイム」→「ランタイムのタイプを変更」で「T4 GPU」を選択してください。</span>
        </div>
      </div>

      {/* Local Setup Guide */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">ローカル環境を構築する場合</h3>
        <p className="text-slate-600">
          もし自分のPCで動かしたい場合は、**Miniconda** を使うのが最も安全で一般的です。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-bold text-blue-600 mb-2">1. Minicondaを導入</div>
            <p className="text-sm text-slate-500">公式サイトからインストーラーをダウンロードして実行します。</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-bold text-blue-600 mb-2">2. 仮想環境を作成</div>
            <p className="text-sm text-slate-500">ターミナルで `conda create -n pxr python=3.10` を実行します。</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-bold text-blue-600 mb-2">3. ライブラリを導入</div>
            <p className="text-sm text-slate-500">`pip install rdkit chemprop pandas scikit-learn` で完了です。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
