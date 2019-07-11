var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "solidity",
    lineNumbers: true,
    theme: "nord",
    smartIndent: true,
    autocorrect: true,
    indentUnit: 4
});