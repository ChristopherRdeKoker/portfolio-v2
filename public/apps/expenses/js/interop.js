export function load(key) {
  return window.localStorage.getItem(key);
}

export function save(key, value) {
  window.localStorage.setItem(key, value);
  if (window.localStorage.getItem(key) !== value) {
    throw new Error("localStorage did not keep the value");
  }
}

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}`;
}

export function download(name, mime, text) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function click(id) {
  document.getElementById(id)?.click();
}

export function focus(id, select) {
  const el = document.getElementById(id);
  if (!el) return;
  el.focus();
  if (select && typeof el.select === "function") el.select();
}
