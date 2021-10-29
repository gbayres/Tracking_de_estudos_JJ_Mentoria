function showFeedback(message: string, type: string): void {
    window.alert(type.toUpperCase() + ': ' + message);
}

const feedback = showFeedback('ola', 'info')

function showError(message: string): never {
    throw new Error("função marcada com never nunca retorna nada")
}

const error = showError("mensagem de error");

