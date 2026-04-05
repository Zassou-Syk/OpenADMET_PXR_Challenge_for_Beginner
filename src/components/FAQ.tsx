import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Code, Table, FlaskConical, ShieldCheck, Copy, ExternalLink, Zap, HardDrive, AlertTriangle, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import IlocExplanation from './IlocExplanation';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

function FAQItem({ question, children, icon }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-all hover:border-blue-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
            {icon}
          </div>
          <span className="font-bold text-slate-900">{question}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/30">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Q&A・逆引き解説集</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          学習中に生じた具体的な疑問とその解説をまとめています。
          カテゴリ別に整理しているので、必要な情報を探してみてください。
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* pandas Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="p-2 bg-blue-50 rounded-xl">
              <Table className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">pandasの初心者向けFAQ</h3>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="ValueError: The truth value of a Series is ambiguous が出た時の対処法は？" 
              icon={<AlertTriangle className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  このエラーは、Pythonの <code>if</code> 文に <strong>「複数の値が入ったSeries」</strong> をそのまま渡したときに発生します。
                </p>
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <p className="text-sm font-bold text-red-800 mb-2">❌ なぜエラーになるのか？</p>
                  <p className="text-xs text-red-700">
                    <code>if</code> 文は「YesかNoか（TrueかFalseか）」を1つだけ期待しています。しかし、Seriesには複数のデータが入っているため、Pythonは「全部がTrueならYesなのか？ 1つでもTrueがあればYesなのか？」と判断に迷ってしまいます。これが <strong>Ambiguous（曖昧）</strong> という意味です。
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm font-bold text-blue-800 mb-2">✅ どう直せばいい？</p>
                  <ul className="text-xs text-blue-700 space-y-2">
                    <li><strong>s.any():</strong> 「1つでもTrueがあればTrue」として扱う</li>
                    <li><strong>s.all():</strong> 「全部がTrueならTrue」として扱う</li>
                    <li><strong>s.empty:</strong> 「データが空かどうか」を判定する</li>
                  </ul>
                </div>
                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                  <p className="text-sm font-bold mb-2">💡 フィルタリングでの注意点</p>
                  <p className="text-xs">
                    複数の条件を組み合わせる場合、Python標準の <code>and</code> や <code>or</code> は使えません。代わりに <strong>ビット演算子</strong>（<code>&</code> や <code>|</code>）を使い、各条件を <code>( )</code> で囲む必要があります。
                    <br /><br />
                    <code>df[(df["A"] &gt; 0) & (df["B"] &lt; 0)]</code>
                  </p>
                </div>
              </div>
            </FAQItem>

            <FAQItem 
              question="Parquet（パーケ）って何？ CSVと何が違うの？" 
              icon={<HardDrive className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  <strong>Parquet</strong> は、ビッグデータの処理に特化した「非常に効率の良いデータ保存形式」です。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                    <p className="text-sm font-bold mb-2">📄 CSV (テキスト形式)</p>
                    <ul className="text-xs space-y-1">
                      <li>・人間が読める（メモ帳で開ける）</li>
                      <li>・データサイズが大きくなりがち</li>
                      <li>・型（数値か文字列か）の情報が消える</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <p className="text-sm font-bold text-emerald-800 mb-2">📦 Parquet (列指向形式)</p>
                    <ul className="text-xs text-emerald-700 space-y-1">
                      <li>・コンピュータが読むための高速形式</li>
                      <li>・強力な圧縮でサイズが劇的に小さい</li>
                      <li>・<strong>型情報を完全に保持</strong>（読み込みが速い）</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm">
                  データ分析の現場では、数百万行のデータを扱う際にCSVだと読み込みに時間がかかりすぎますが、Parquetなら一瞬で終わることがあります。
                </p>
                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                  <p className="text-xs font-mono">
                    df.to_parquet("data.parquet") # 保存<br />
                    df = pd.read_parquet("data.parquet") # 読み込み
                  </p>
                </div>
              </div>
            </FAQItem>

            <FAQItem 
              question="stack() って何？（列を縦に積み上げる）" 
              icon={<Table className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  <code>stack()</code> は、横に並んでいる<strong>「列（Columns）」を「行（Index）」に移動</strong>させて、データを縦に積み上げる操作です。
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm font-bold text-blue-800 mb-2">🔄 Unpivoting（アンピボット）の考え方</p>
                  <p className="text-xs text-blue-700">
                    Excelのピボット解除やSQLのUNPIVOTと同じです。横に広がった集計表を、コンピュータが処理しやすい「縦に長いリスト形式」に変換します。
                  </p>
                </div>
                <p className="text-sm">
                  チュートリアルの例では、<code>A</code> と <code>B</code> という列がインデックスの3段目（一番内側）に潜り込み、データが細長くなっています。
                </p>
                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                  <p className="text-xs font-mono">
                    # 逆の操作は unstack()<br />
                    stacked.unstack()
                  </p>
                  <p className="text-[10px] mt-2 text-slate-500">
                    ※unstack() を使うと、縦に積み上がったデータを再び横に広げて元の形に戻せます。
                  </p>
                </div>
              </div>
            </FAQItem>

            <FAQItem 
              question="agg と transform の違いは？（集計 vs 変形）" 
              icon={<FlaskConical className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  この2つの違いは<strong>「結果の形（サイズ）」</strong>にあります。
                </p>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <p className="text-sm font-bold text-purple-800 mb-2">📊 agg (Aggregate: 集計)</p>
                    <p className="text-xs text-purple-700 mb-2">
                      <strong>算出式:</strong> <code>(列の平均値) × 5.6</code>
                    </p>
                    <p className="text-xs text-purple-600">
                      たくさんのデータを1つの値に「凝縮」します。6行のデータも、1つの平均値にまとまるため、データサイズが小さくなります。
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm font-bold text-blue-800 mb-2">🧪 transform (Transform: 変形)</p>
                    <p className="text-xs text-blue-700 mb-2">
                      <strong>算出式:</strong> <code>(各要素) × 101.2</code>
                    </p>
                    <p className="text-xs text-blue-600">
                      データの「形」を維持したまま、中身だけを書き換えます。6行のデータは6行のまま、全員が一斉に101.2倍されます。
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  <code>lambda x: ...</code> は「使い捨ての関数」です。<code>x</code> には「列全体」が入ってくるイメージで、それをどう料理するかをその場で指定しています。
                </p>
              </div>
            </FAQItem>

            <FAQItem 
              question="pandasの「自動アライメント」って何？（データの自動位置合わせ）" 
              icon={<Zap className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  pandasの計算は、データの並び順ではなく<strong>「ラベル（インデックス）」</strong>を見て自動的に相手を探します。これを<strong>アライメント</strong>と呼びます。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                    <p className="text-sm font-bold mb-2">1. ラベルでマッチング</p>
                    <p className="text-xs">
                      日付が 1/3 のデータは、相手のデータの 1/3 を探して計算します。順番がずれていても、ラベルさえ合っていれば正しく計算してくれます。
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <p className="text-sm font-bold text-orange-800 mb-2">2. NaNの道連れ現象</p>
                    <p className="text-xs text-orange-700">
                      計算相手が <code>NaN</code>（欠損値）だったり、相手に同じラベルが存在しない場合、結果は強制的に <code>NaN</code> になります。
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  <code>shift(2)</code> などでデータがずれると、計算相手が <code>NaN</code> になる行が出てくるため、結果の表に <code>NaN</code> が増えるのです。これは「データがない場所で無理に計算して間違った値を出さない」ためのpandasの優しさでもあります。
                </p>
              </div>
            </FAQItem>

            <FAQItem 
              question="なぜ df.copy() を使うの？（参照とコピーの違い）" 
              icon={<Copy className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  <code>df2 = df.copy()</code> を行う最大の理由は、<strong>「元のデータ（df）を保護するため」</strong>です。
                </p>
                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                  <p className="text-sm font-bold mb-2">⚠️ .copy() を使わない場合 (df2 = df)</p>
                  <p className="text-xs">
                    これは「同じデータに別の名前をつけただけ」の状態です。<code>df2</code> を書き換えると、元の <code>df</code> も勝手に書き換わってしまいます。
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm font-bold text-blue-800 mb-2">✅ .copy() を使う場合 (df2 = df.copy())</p>
                  <p className="text-xs text-blue-700">
                    これは「データのクローン（複製）を作成した」状態です。<code>df2</code> でどんなに実験（列の追加や削除）をしても、元の <code>df</code> は綺麗なまま保たれます。
                  </p>
                </div>
                <p className="text-sm">
                  データ分析では「元のデータは常に残しておく」のが鉄則です。失敗してもすぐに元に戻れるよう、加工の前には <code>.copy()</code> を使う癖をつけておきましょう！
                </p>
              </div>
            </FAQItem>

            <FAQItem 
              question="df.iloc[3:5, 0:2] の指定範囲はどう決まる？" 
              icon={<Table className="w-5 h-5" />}
            >
              <IlocExplanation />
            </FAQItem>

            <FAQItem 
              question="SMILES記法をPythonで扱うには？" 
              icon={<FlaskConical className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  化学構造を扱うには **RDKit** というライブラリが標準的です。
                  AI StudioのCode Executionで「RDKitを使ってSMILESから分子を描画して」と頼むと、具体的なコードを生成してくれます。
                </p>
              </div>
            </FAQItem>

            <FAQItem 
              question="Pythonのインデックスが0から始まるのはなぜ？" 
              icon={<Code className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  これは多くのプログラミング言語（C, Java, Pythonなど）の伝統です。
                  「先頭からの距離（オフセット）」を基準に考えるため、先頭は距離0、つまり0番目となります。
                </p>
              </div>
            </FAQItem>
          </div>
        </section>

        {/* GitHub Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="p-2 bg-slate-100 rounded-xl">
              <Github className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Google AI StudioでのGitHub利用</h3>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="GitHubとShare機能、どう使い分けるのがいい？" 
              icon={<ExternalLink className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  勉強会の仲間に共有する場合、<strong>「何を見せたいか」</strong>によって使い分けましょう。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Share機能（動く画面を見せたい）:</strong> 
                    今あなたが操作しているこの便利な画面そのものを共有できます。コードが読めない仲間にも「こんなツールを作ったよ！」と見せるのに最適です。
                  </li>
                  <li>
                    <strong>GitHub（中身の仕組みを見せたい）:</strong> 
                    「どうやってこのアプリを作ったか」という設計図（コード）を共有します。プログラミングに詳しい仲間とコードを改善し合うのに向いています。
                  </li>
                </ul>
                <p className="text-sm italic">
                  ※GitHubのURLだけを送っても、相手は「コードの羅列」しか見えません。アプリとして使ってもらいたいなら、<strong>Share機能</strong>で発行したURLを送りましょう！
                </p>
              </div>
            </FAQItem>

            <FAQItem 
              question="GitHubを公開（Public）にする際の注意点は？" 
              icon={<ShieldCheck className="w-5 h-5" />}
            >
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  勉強会の仲間と共有するために公開にするのは素晴らしいことですが、以下の2点に注意しましょう。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>APIキーの漏洩防止:</strong> <code>.env</code> ファイルなどの秘密情報は絶対にアップロードしないでください。AI Studioの <code>.gitignore</code> が守ってくれますが、コード内に直接キーを書かないよう注意が必要です。
                  </li>
                  <li>
                    <strong>データの再配布制限:</strong> チャレンジのデータセット（CSV等）自体を公開して良いかは規定を確認しましょう。不安な場合はデータファイルだけを除外設定（.gitignore）にするのが安全です。
                  </li>
                </ul>
              </div>
            </FAQItem>
          </div>
        </section>
      </div>
    </div>
  );
}
