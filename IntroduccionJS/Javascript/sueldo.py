import tkinter as tk
from tkinter import scrolledtext
import time

def escribir_carta(cartatexto, velocidad, texto_widget):
    for letra in cartatexto:
        texto_widget.insert(tk.END, letra)
        texto_widget.see(tk.END)  # Hacer que el texto sea visible automáticamente
        texto_widget.update()
        time.sleep(velocidad)

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Carta Interactiva")

# Establecer el tamaño de la ventana
ventana.geometry("500x300")

# Mensaje de ejemplo
carta = """
Lorem Ipsum

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel voluptates quidem 
placeat, deleniti ad enim aspernatur eligendi quo in tempore explicabo accusamus 
laudantium modi porro rerum cumque voluptatem natus iusto. Cupiditate autem aut 
libero perferendis, laborum maxime molestias rerum fugit cumque et aperiam 
reprehenderit quis aliquid unde atque soluta facere blanditiis, consequatur qui, 
nemo enim tenetur! Nam, libero ex.
"""

# Velocidad de escritura (ajusta según prefieras)
velocidad_escritura = 0.05

# Crear un widget ScrolledText para mostrar el texto
texto_widget = scrolledtext.ScrolledText(ventana, wrap="word", font=("Arial", 20))
texto_widget.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

# Llamada a la función para escribir la carta poco a poco
escribir_carta(carta, velocidad_escritura, texto_widget)

# Iniciar el bucle de eventos
ventana.mainloop()
