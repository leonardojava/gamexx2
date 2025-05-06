
import Head from 'next/head';

export default function CipherPage() {
  const ciphers = [
    {
      title: "Caesar Cipher (shift +5)",
      cipherText: "Ymnx nx f xjhwjy",
      decodedText: "This is a secret",
      description: "Replace each letter with the one 5 positions back in the alphabet. For example, 'Y' → 'T', 'm' → 'h', etc."
    },
    {
      title: "ROT13",
      cipherText: "Uryyb Jbeyq!",
      decodedText: "Hello World!",
      description: "Replace each letter with the one 13 positions away in the alphabet. For example, 'U' → 'H', 'r' → 'e', etc. This is a special case of the Caesar cipher."
    },
    {
      title: "Binary to ASCII",
      cipherText: "01001000 01101001",
      decodedText: "Hi",
      description: "Convert each 8-bit binary sequence to its decimal value, then find the corresponding ASCII character. For example, 01001000 = 72 = 'H', 01101001 = 105 = 'i'."
    },
    {
      title: "Morse Code",
      cipherText: ".... . .-.. .-.. ---",
      decodedText: "HELLO",
      description: "Translate each sequence of dots and dashes to their corresponding letters using the Morse code alphabet. For example, '....' = 'H', '.' = 'E', etc."
    },
    {
      title: "A=1, B=2, ..., Z=26 (Alphabet position)",
      cipherText: "3-1 5-2 12-3 9-4 6-5",
      decodedText: "CABIN",
      description: "Convert each number to its corresponding letter in the alphabet. For example, 3 = 'C', 1 = 'A', etc."
    },
    {
      title: "Atbash Cipher",
      cipherText: "Gsv xlwv gl gsv zoo",
      decodedText: "The code to the all",
      description: "Replace each letter with its mirror opposite in the alphabet. For example, 'G' → 'T' (G is the 7th letter from the start, T is the 7th letter from the end), etc."
    },
    {
      title: "ROT13 (Another example)",
      cipherText: "Mjqqt, Btwqi!",
      decodedText: "Hello, World!",
      description: "Replace each letter with the one 13 positions away in the alphabet. For example, 'M' → 'H', 'j' → 'e', etc."
    },
    {
      title: "Hexadecimal to ASCII",
      cipherText: "68 65 6c 6c 6f",
      decodedText: "hello",
      description: "Convert each hex pair to its decimal value, then find the corresponding ASCII character. For example, 68 = 104 = 'h', 65 = 101 = 'e', etc."
    },
    {
      title: "Base64 Decoding",
      cipherText: "TWFu",
      decodedText: "Man",
      description: "Decode the Base64 string to reveal the original text. Base64 encoding represents binary data in an ASCII string format by translating it into a radix-64 representation."
    },
    {
      title: "A=1, B=2, ..., Z=26 (with dashes)",
      cipherText: "20-8-5 2-5-19-20",
      decodedText: "THE BEST",
      description: "Convert each number to its corresponding letter in the alphabet. For example, 20 = 'T', 8 = 'H', etc."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Cipher Decoder</title>
        <meta name="description" content="Decode various cipher methods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
          Secret Message Decoder
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {ciphers.map((cipher, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                  {cipher.title}
                </h3>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3 break-all">
                  "{cipher.cipherText}"
                </div>
                <div className="bg-blue-50 p-3 rounded-md font-mono text-sm mb-3">
                  "{cipher.decodedText}"
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>How to decode:</strong> {cipher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

     
    </div>
  );
}