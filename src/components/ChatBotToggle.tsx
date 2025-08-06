import { useState } from 'react';

export default function ChatBotToggle() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content:
        'You are a helpful assistant for Doxali, an AI-powered legal document abstraction service. Answer questions about how the platform works, what it supports, and direct users to links like /about, /faq, /pricing, or /contact. Keep answers short and professional.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const updated = [...messages, { role: 'user', content: input }];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages([...updated, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#2fc4a0] hover:bg-[#28b093] text-white px-4 py-2 rounded-full shadow-lg"
      >
        {open ? 'Close Chat' : 'Ask Doxali'}
      </button>

      {open && (
        <div className="w-80 h-96 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl shadow-lg mt-4 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
            {messages.filter((m) => m.role !== 'system').map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.role === 'user'
                    ? 'text-right text-[#2fc4a0]'
                    : 'text-left text-gray-700 dark:text-gray-300'
                }`}
              >
                <p>{msg.content}</p>
              </div>
            ))}
            {loading && <p className="italic text-gray-400">Typing...</p>}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2 border-t border-gray-100 dark:border-white/10 flex"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-2 py-1 rounded bg-gray-100 dark:bg-[#1a1a1a] text-black dark:text-white focus:outline-none"
              placeholder="Ask something..."
            />
            <button
              type="submit"
              disabled={loading}
              className="ml-2 text-[#2fc4a0] font-semibold hover:text-[#28b093]"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
