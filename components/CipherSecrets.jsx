import Head from 'next/head';

export default function CipherSecrets(){
    const secrets = [
        "Dro aesmu lbygx pyh tewzc yfob dro vkji nyq.",
        "Gur cnffjbeq vf frperg",
        "01010011 01100011 01101000 01101111 01101111 01101100",
        "... -.-. .... --- --- .-..",
        "3-15-4-5",
        "Gsv xlwv gl gsv rmgvi",
        "48 65 6c 6c 6f 21",
        "U29mdHdhcmUgaXMgbGlmZQ==",
        "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl",
        "Nkrru Cuxrj!",
        ".... .- .--. .--. -.--",
        "84 101 97 99 104",
        "Zggzxp Yvxl",
        "QW5zd2VyIQ==",
        "Uifsf jt b tfdsfu dpef"
      ];
      return (
        <div className="min-h-screen bg-gray-100">
          <Head>
            <title>Ciphers: Decode each until your's matches</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
              Secret Messages: Decode each until your's matches
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {secrets.map((secret, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden relative"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600"></div>
                  <div className="p-6">
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3 break-all">
                      "{secret}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
    
         
        </div>
      );
}