// src/components/CLIMockup.jsx
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const CLIMockup = ({ commands, language }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    const codeString = commands.join('\n');
    return (
        <div className="cli-mockup w-fit min-w-40 bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <div className="cli-header flex items-center justify-between bg-gray-800 px-3 py-0.5 sm:py-2">
                <div className="flex items-center">
                    <div className="cli-button bg-red-500 rounded-full w-3 h-3 mr-2"></div>
                    <div className="cli-button bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
                    <div className="cli-button bg-green-500 rounded-full w-3 h-3"></div>
                </div>
                <div className="text-xs font-sans">
                    {language}
                </div>
            </div>
            <pre className="px-3">
                <code className={`language-${language}`}>
                {codeString}
                </code>
            </pre>
        </div>
    )
}

export default CLIMockup