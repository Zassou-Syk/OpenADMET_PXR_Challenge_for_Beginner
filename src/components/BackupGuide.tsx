import React from 'react';
import { Download, Github, Copy, History, ShieldCheck, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const backupMethods = [
  {
    title: "ZIP形式でダウンロード",
    description: "プロジェクト全体を一つのZIPファイルとして手元のPCに保存できます。最も手軽なバックアップ方法です。",
    icon: <Download className="w-6 h-6 text-blue-500" />,
    steps: ["右上の「Settings」メニューを開く", "「Export to ZIP」を選択"]
  },
  {
    title: "GitHubへエクスポート",
    description: "コードをGitHubのリポジトリに直接プッシュします。変更履歴が残り、世界中のどこからでもアクセス可能になります。",
    icon: <Github className="w-6 h-6 text-slate-800" />,
    steps: ["右上の「Settings」メニューを開く", "「Export to GitHub」を選択", "リポジトリ名を入力してプッシュ"]
  },
  {
    title: "アプリを複製 (Remix)",
    description: "現在の良好な状態をそのまま残し、新しいコピーを作成して編集を続けることができます。",
    icon: <Copy className="w-6 h-6 text-emerald-500" />,
    steps: ["AI Studioのダッシュボードに戻る", "アプリのカードにある「...」メニューから「Remix」を選択"]
  }
];

export default function BackupGuide() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">バックアップとバージョン管理</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          「過去の良好な状態」を守るために、AI Studioには強力なエクスポート機能が備わっています。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {backupMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
              {method.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{method.description}</p>
            
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">手順</p>
              {method.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">
                    {i + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8">
        <div className="p-4 bg-blue-800 rounded-2xl">
          <ShieldCheck className="w-12 h-12 text-blue-300" />
        </div>
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-xl font-bold">おすすめの運用方法</h4>
          <p className="text-blue-200 leading-relaxed">
            大きな機能追加やデザイン変更の前には、必ず **「Export to ZIP」** でバックアップを取るか、
            **「Remix」** で複製を作成することをお勧めします。これにより、いつでも「動いていた状態」に戻ることができます。
          </p>
        </div>
      </div>
    </div>
  );
}
