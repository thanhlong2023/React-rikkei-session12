import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TodoListAnimated.tsx
// - TypeScript + React single-file component
// - Uses TailwindCSS for styling
// - Uses framer-motion for animations
// Dependencies: framer-motion, tailwindcss
// Usage: import TodoListAnimated from './TodoListAnimated' and render <TodoListAnimated />

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoListAnimated() {
  const [todos, setTodos] = useState<Todo[]>(() => [
    { id: Date.now(), text: "Example todo: Làm bài tập", completed: false },
  ]);
  const [value, setValue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editingId !== null) inputRef.current?.focus();
  }, [editingId]);

  const addTodo = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = value.trim();
    if (!text) return;
    const newTodo: Todo = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      text,
      completed: false,
    };
    setTodos((s) => [newTodo, ...s]);
    setValue("");
  };

  const removeTodo = (id: number) => {
    setTodos((s) => s.filter((t) => t.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos((s) =>
      s.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id: number) => {
    const text = editingText.trim();
    if (!text) {
      // if empty after edit, delete
      removeTodo(id);
    } else {
      setTodos((s) => s.map((t) => (t.id === id ? { ...t, text } : t)));
    }
    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Todo List ✨</h1>

        {/* Add form */}
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
            placeholder="Thêm todo mới... (Enter để thêm)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 active:scale-95 transition-transform"
          >
            Thêm
          </button>
        </form>

        {/* List */}
        <div className="space-y-2">
          <AnimatePresence initial={false}>
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                layout
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 12,
                  scale: 0.96,
                  transition: { duration: 0.18 },
                }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className="flex items-center justify-between gap-3 p-3 rounded-lg border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    aria-label="toggle complete"
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                      todo.completed
                        ? "bg-green-100 border-green-300"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    {todo.completed ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.414 0l-3.536-3.536a1 1 0 111.414-1.414L9 11.586l6.363-6.363a1 1 0 011.344-.93z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 opacity-30"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                      </svg>
                    )}
                  </button>

                  <div className="flex-1">
                    {editingId === todo.id ? (
                      <input
                        ref={inputRef}
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onBlur={() => saveEdit(todo.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(todo.id);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        className="w-full bg-transparent outline-none"
                      />
                    ) : (
                      <div
                        onDoubleClick={() => startEdit(todo.id, todo.text)}
                        className={`select-none ${
                          todo.completed
                            ? "line-through text-slate-400"
                            : "text-slate-800"
                        }`}
                      >
                        {todo.text}
                      </div>
                    )}
                    <div className="text-xs text-slate-400 mt-1">
                      Double-click để chỉnh sửa • Nhấn Enter để lưu
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => startEdit(todo.id, todo.text)}
                    className="px-3 py-1 rounded-md border border-slate-200 text-sm hover:bg-slate-50"
                  >
                    Sửa
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeTodo(todo.id)}
                    className="px-3 py-1 rounded-md border border-rose-200 text-sm text-rose-600 hover:bg-rose-50"
                  >
                    Xóa
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {todos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-400 p-6"
            >
              Không có todo nào — hãy thêm cái mới!
            </motion.div>
          )}
        </div>

        {/* Footer small controls */}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <div>{todos.length} todo(s)</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setTodos((s) => s.map((t) => ({ ...t, completed: false })))
              }
              className="px-3 py-1 rounded-md border border-slate-200 hover:bg-slate-50"
            >
              Bỏ chọn tất cả
            </button>
            <button
              onClick={() => setTodos((s) => s.filter((t) => !t.completed))}
              className="px-3 py-1 rounded-md border border-rose-200 text-rose-600 hover:bg-rose-50"
            >
              Xóa đã hoàn thành
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
