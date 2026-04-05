import React from 'react';
import { BookOpen, Code, Table, CheckCircle2, Target, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const pythonConcepts = [
  {
    title: "変数とデータ型",
    description: "数値、文字列（SMILESなど）、真偽値を箱（変数）に入れる感覚を掴みましょう。",
    importance: "高",
    why: "分子データや計算結果を一時的に保存するために必須です。"
  },
  {
    title: "リストと辞書",
    description: "複数のデータをまとめて扱う方法です。特に辞書は、分子の属性（ID、SMILES、活性）を管理するのに便利です。",
    importance: "高",
    why: "データセット全体をループで処理する際に使います。"
  },
  {
    title: "関数 (def)",
    description: "特定の処理（例：SMILESから分子量を計算する）をひとまとめにして、名前をつけて呼び出せるようにします。",
    importance: "中",
    why: "コードを整理し、再利用しやすくします。"
  },
  {
    title: "ライブラリのインポート (import)",
    description: "PandasやRDKitなど、他人が作った便利な道具箱を自分のプログラムに読み込む方法です。",
    importance: "最高",
    why: "これがないと何も始まりません！"
  }
];

const pandasConcepts = [
  {
    title: "DataFrame (データフレーム)",
    description: "Excelのシートのような「行」と「列」がある表形式のデータ構造です。",
    importance: "最高",
    why: "機械学習に使うデータはすべてこの形式で扱います。"
  },
  {
    title: "データの読み込み (read_csv)",
    description: "CSVファイルやExcelファイルをPythonに読み込む最初のステップです。",
    importance: "最高",
    why: "チャレンジのデータセットを読み込むために必須です。"
  },
  {
    title: "列の選択とフィルタリング",
    description: "特定の列（例：SMILES列）だけを取り出したり、条件（例：活性があるものだけ）で絞り込んだりします。",
    importance: "高",
    why: "必要なデータだけを抽出してモデルに渡すために使います。"
  },
  {
    title: "欠損値の処理 (dropna, fillna)",
    description: "データが空っぽの部分をどう扱うか（消すか、埋めるか）を決めます。",
    importance: "中",
    why: "データが不完全だと機械学習モデルがエラーを起こすことがあります。"
  }
];

export default function LearningFocus() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">初心者が「ここだけは！」押さえるべきポイント</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          公式ドキュメントは膨大ですが、PXRチャレンジに向けて優先的に理解すべき項目をまとめました。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Python Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b-2 border-blue-100">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Python チュートリアルの要点</h3>
          </div>
          <div className="space-y-4">
            {pythonConcepts.map((concept, i) => (
              <ConceptCard key={i} {...concept} color="blue" />
            ))}
          </div>
        </div>

        {/* Pandas Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b-2 border-emerald-100">
            <div className="p-2 bg-emerald-600 rounded-lg text-white">
              <Table className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Pandas 10分間入門の要点</h3>
          </div>
          <div className="space-y-4">
            {pandasConcepts.map((concept, i) => (
              <ConceptCard key={i} {...concept} color="emerald" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex items-start gap-6">
        <div className="p-3 bg-amber-100 rounded-2xl text-amber-600 shrink-0">
          <Lightbulb className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-amber-900">アドバイス：完璧を目指さないで！</h4>
          <p className="text-amber-800 leading-relaxed">
            プログラミングは「辞書を全部暗記する」のではなく「必要な時に辞書を引く」能力が重要です。
            まずは **「read_csvでデータを読み込み、中身を表示する」** ことができれば、Step 1は合格です！
            具体的なコードはAI Studioに書いてもらい、それを読み解くことで理解を深めていきましょう。
          </p>
        </div>
      </div>
    </div>
  );
}

function ConceptCard({ title, description, importance, why, color }: { title: string; description: string; importance: string; why: string; color: 'blue' | 'emerald' }) {
  const colorClasses = {
    blue: 'border-blue-100 hover:border-blue-400 bg-blue-50/30',
    emerald: 'border-emerald-100 hover:border-emerald-400 bg-emerald-50/30'
  };
  const badgeClasses = {
    blue: 'bg-blue-100 text-blue-700',
    emerald: 'bg-emerald-100 text-emerald-700'
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`p-6 rounded-2xl border transition-all ${colorClasses[color]}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${badgeClasses[color]}`}>
          重要度: {importance}
        </span>
      </div>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex items-start gap-2 text-xs text-slate-500 italic">
        <Target className="w-4 h-4 shrink-0 mt-0.5" />
        <span>{why}</span>
      </div>
    </motion.div>
  );
}
