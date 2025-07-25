import React, { useState } from "react";

export default function InvitationGenerator() {
  const [name, setName] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const baseURL = "https://aksarasenja.com/intanimam?to=";

  const resetData = () => {
    setName("");
    setGeneratedText("");
  };
  const generateText = () => {
    const encodedName = encodeURIComponent(name.trim());
    const fullURL = `${baseURL}${encodedName}`;

    const text = `Assalamu'alaikum Warohmatullahi Wabarokatuh

Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan resepsi pernikahan putra-putri kami.

Imam Auliya Nurakhman & Intan Lisna Putri

Akad Nikah 
Akan dilaksanakan pada :
Hari, Tanggal : Sabtu, 26 Juli 2025 
Jam : 08:00 s.d Selesai 
Lokasi : Graha Umbaran Sendang Sumber, Kab. Cirebon 

*Resepsi Pernikahan* 
Akan dilaksanakan pada :
Hari, Tanggal : Sabtu, 26 Juli 2025 
Jam : 11:00 - 15:00 WIB 
Lokasi : Graha Umbaran Sendang Sumber, Kab. Cirebon 

Undangan dapat diakses melalui:
${fullURL}

Kehadiran Anda adalah silaturahmi, do'a restu Anda adalah kado terindah bagi kami, kehadiran Anda adalah doa' restu yang tak ternilai harganya.

Jazakumullahu Khairan Katsiran, hanya kepada Illahi Robbi tercurah do'a sebagai ungkapan terima kasih kami.

Wassalamu'alaikum Warohmatullahi Wabarokatuh`;

    setGeneratedText(text);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      alert("Teks undangan berhasil disalin!");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row max-w-screen-lg mx-auto gap-6">
        {/* Input Panel */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Masukkan Nama Penerima</h2>
          <input
            type="text"
            className="w-full border p-3 rounded mb-4 text-lg"
            placeholder="Contoh: Bapak/Ibu Haji Sutarman"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={generateText}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg w-full sm:w-auto"
            >
              Generate Undangan
            </button>
            <button
              onClick={resetData}
              className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500 transition-colors duration-200 text-lg w-full sm:w-auto"
            >
              Reset Data
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Teks Undangan</h2>
          <pre className="w-full h-[500px] border p-4 rounded mb-4 text-sm font-mono whitespace-pre-wrap overflow-auto bg-gray-50">
            {generatedText}
          </pre>
          <button
            onClick={copyToClipboard}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-lg w-full sm:w-auto"
          >
            Copy Text Undangan
          </button>
        </div>
      </div>
    </div>
  );
}
