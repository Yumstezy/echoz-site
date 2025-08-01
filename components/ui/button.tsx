export function Button({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg transition-all font-semibold ${className}`}
    >
      {children}
    </button>
  );
}