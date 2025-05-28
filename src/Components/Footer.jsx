import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="mb-4 md:mb-0">&copy; 2025 AnimeVerse. Todos los derechos reservados.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-purple-500 transition">Inicio</a>
                    <a href="#" className="hover:text-purple-500 transition">Series</a>
                    <a href="#" className="hover:text-purple-500 transition">Contacto</a>
                    <a href="#" className="hover:text-purple-500 transition">Política de privacidad</a>
                </div>
            </div>
        </footer>
    )
}
