import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Code, Table, FlaskConical } from 'lucide-react';
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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Q&A・逆引き解説集</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          学習中に生じた具体的な疑問とその解説をまとめています。
          情報が増えても、ここから折りたたんで整理できるので安心してください。
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
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
    </div>
  );
}
