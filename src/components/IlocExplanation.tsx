import React from 'react';
import { Table, ArrowRight, Info, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function IlocExplanation() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">df.iloc[3:5, 0:2] の仕組みを徹底解説</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Pandasで最も重要なデータ抽出メソッドの一つ、`iloc` の動きを視覚的に理解しましょう。
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
        {/* Breakdown Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-700 mb-1">iloc とは？</h3>
              <p className="text-sm text-blue-600 leading-relaxed">
                "Integer Location" の略です。ラベル（名前）ではなく、**「何番目の行・列か」という番号**でデータを指定します。
              </p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h3 className="font-bold text-emerald-700 mb-1">スライスのルール</h3>
              <p className="text-sm text-emerald-600 leading-relaxed">
                `start:stop` は、**「start番目から、stop番目の手前まで」**を意味します。
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Table className="w-24 h-24" />
            </div>
            <div className="text-2xl font-mono space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-slate-500">df.iloc[</span>
                <span className="text-orange-400 font-bold underline decoration-2 underline-offset-4">3:5</span>
                <span className="text-slate-500">,</span>
                <span className="text-blue-400 font-bold underline decoration-2 underline-offset-4">0:2</span>
                <span className="text-slate-500">]</span>
              </div>
              
              <div className="grid grid-cols-2 gap-8 text-sm mt-8">
                <div className="space-y-2">
                  <div className="text-orange-400 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    行の指定 (Rows)
                  </div>
                  <p className="text-slate-400">
                    3番目と4番目の行を選択。<br />
                    (5は含まれません！)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    列の指定 (Columns)
                  </div>
                  <p className="text-slate-400">
                    0番目と1番目の列を選択。<br />
                    (2は含まれません！)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Table Simulation */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-slate-400" />
            なぜあのような出力になるのか？
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-3 border border-slate-200 text-slate-400 font-mono italic">Index</th>
                  <th className="p-3 border border-slate-200 bg-blue-50/50 text-blue-700 font-mono">0 (A)</th>
                  <th className="p-3 border border-slate-200 bg-blue-50/50 text-blue-700 font-mono">1 (B)</th>
                  <th className="p-3 border border-slate-200 text-slate-400 font-mono">2 (C)</th>
                  <th className="p-3 border border-slate-200 text-slate-400 font-mono">...</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-slate-400">
                  <td className="p-3 border border-slate-200 font-mono italic">0 (2013-01-01)</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                </tr>
                <tr className="text-slate-400">
                  <td className="p-3 border border-slate-200 font-mono italic">1 (2013-01-02)</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                </tr>
                <tr className="text-slate-400">
                  <td className="p-3 border border-slate-200 font-mono italic">2 (2013-01-03)</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                </tr>
                <tr className="bg-orange-50/50">
                  <td className="p-3 border border-slate-200 font-mono font-bold text-orange-700">3 (2013-01-04)</td>
                  <td className="p-3 border border-slate-200 bg-emerald-50 font-mono text-emerald-700 font-bold">0.721555</td>
                  <td className="p-3 border border-slate-200 bg-emerald-50 font-mono text-emerald-700 font-bold">-0.706771</td>
                  <td className="p-3 border border-slate-200 italic text-slate-300">...</td>
                  <td className="p-3 border border-slate-200 italic text-slate-300">...</td>
                </tr>
                <tr className="bg-orange-50/50">
                  <td className="p-3 border border-slate-200 font-mono font-bold text-orange-700">4 (2013-01-05)</td>
                  <td className="p-3 border border-slate-200 bg-emerald-50 font-mono text-emerald-700 font-bold">-0.424972</td>
                  <td className="p-3 border border-slate-200 bg-emerald-50 font-mono text-emerald-700 font-bold">0.567020</td>
                  <td className="p-3 border border-slate-200 italic text-slate-300">...</td>
                  <td className="p-3 border border-slate-200 italic text-slate-300">...</td>
                </tr>
                <tr className="text-slate-400">
                  <td className="p-3 border border-slate-200 font-mono italic">5 (2013-01-06)</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                  <td className="p-3 border border-slate-200 italic">...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-start gap-4">
          <div className="p-2 bg-blue-100 rounded-xl text-blue-600 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-sm text-blue-800 space-y-2">
            <p className="font-bold">まとめ：</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Pythonのインデックスは **0から始まります**。</li>
              <li>`3:5` は **[3, 4]** のインデックスを指します。</li>
              <li>`0:2` は **[0, 1]** のインデックスを指します。</li>
              <li>結果として、4番目(3)と5番目(4)の行、および1番目(0)と2番目(1)の列が抽出されます。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
