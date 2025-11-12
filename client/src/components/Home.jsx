import React from 'react'

const Home = () => {
    const index =2
  return (
    <div className='width-full px-5 min-h-[calc(100vh-60px)]'>
        <div className='w-full grid grid-cols-5 gap-3 py-4'>
            <div className='w-full flex flex-col gap-2'>
                <label for="">BooK Name</label>
                <input type="text" placeholder='BooK Name' className='w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600'/>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label for="">BooK Title</label>
                <input type="text" placeholder='BooK Title' className='w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600'/>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label for="">Author</label>
                <input type="text" placeholder='Author' className='w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600'/>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label for="">Sellig Price</label>
                <input type="text" placeholder='Sellig Price' className='w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600'/>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label for="">Publish Date</label>
                <input type="date" placeholder='Publish Date' className='w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600'/>
            </div>
        </div>
        <div className='w-full flex justify-end'>
            <button className='bg-green-500 h-10 w-20 rounded-md cursor-pointer hover:bg-green-600'>Submit</button>
        </div>
        <div className='w-full mt-10'>

            {/* Table Section */}
            <div className='w-full'>
                <table className='w-full border border-green-400 '>
                    <thead className='bg-green-400'>
                        <tr>
                            <th className='border border-green-300 px-4 py-2'>BooK Name</th>
                            <th className='border border-green-300 px-4 py-2'>Book Title</th>
                            <th className='border border-green-300 px-4 py-2'>Author</th>
                            <th className='border border-green-300 px-4 py-2'>Selling Price</th>
                            <th className='border border-green-300 px-4 py-2'>Publish Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`${index} % 2 === 0 ? 'bg-green-100' : 'bg-white'`}>
                            <td className='border border-green-300 px-4 py-2'>Vinistan</td>
                            <td className='border border-green-300 px-4 py-2'>Leenas</td>
                            <td className='border border-green-300 px-4 py-2'>Leenas</td>
                            <td className='border border-green-300 px-4 py-2'>Leenas</td>
                            <td className='border border-green-300 px-4 py-2'>Leenas</td>
                        </tr>
                          <tr className={`${1 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>The Green Valley</td>
    <td className='border border-green-300 px-4 py-2'>Journey to Freedom</td>
    <td className='border border-green-300 px-4 py-2'>A.L. Kanistan</td>
    <td className='border border-green-300 px-4 py-2'>2890</td>
    <td className='border border-green-300 px-4 py-2'>2023-05-10</td>
  </tr>

  <tr className={`${2 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Whispers of Code</td>
    <td className='border border-green-300 px-4 py-2'>Mastering JavaScript</td>
    <td className='border border-green-300 px-4 py-2'>Ethan Moore</td>
    <td className='border border-green-300 px-4 py-2'>1599</td>
    <td className='border border-green-300 px-4 py-2'>2022-11-01</td>
  </tr>

  <tr className={`${3 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Digital Healer</td>
    <td className='border border-green-300 px-4 py-2'>AI in Healthcare</td>
    <td className='border border-green-300 px-4 py-2'>Sarah Johnson</td>
    <td className='border border-green-300 px-4 py-2'>2599</td>
    <td className='border border-green-300 px-4 py-2'>2024-01-15</td>
  </tr>

  <tr className={`${4 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Cloud Horizon</td>
    <td className='border border-green-300 px-4 py-2'>AWS for Beginners</td>
    <td className='border border-green-300 px-4 py-2'>Raj Patel</td>
    <td className='border border-green-300 px-4 py-2'>1999</td>
    <td className='border border-green-300 px-4 py-2'>2023-02-20</td>
  </tr>

  <tr className={`${5 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>The Flutter Guide</td>
    <td className='border border-green-300 px-4 py-2'>Mobile Dev Simplified</td>
    <td className='border border-green-300 px-4 py-2'>Emily Carter</td>
    <td className='border border-green-300 px-4 py-2'>3499</td>
    <td className='border border-green-300 px-4 py-2'>2025-04-11</td>
  </tr>

  <tr className={`${6 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Cyber Fortress</td>
    <td className='border border-green-300 px-4 py-2'>Understanding Security</td>
    <td className='border border-green-300 px-4 py-2'>Michael Reed</td>
    <td className='border border-green-300 px-4 py-2'>1899</td>
    <td className='border border-green-300 px-4 py-2'>2023-10-05</td>
  </tr>

  <tr className={`${7 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Infinite Loops</td>
    <td className='border border-green-300 px-4 py-2'>Debugging Life</td>
    <td className='border border-green-300 px-4 py-2'>Anthonipillai L. Kanistan</td>
    <td className='border border-green-300 px-4 py-2'>2499</td>
    <td className='border border-green-300 px-4 py-2'>2025-03-09</td>
  </tr>

  <tr className={`${8 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Code & Coffee</td>
    <td className='border border-green-300 px-4 py-2'>Dev Life Stories</td>
    <td className='border border-green-300 px-4 py-2'>Nina Roberts</td>
    <td className='border border-green-300 px-4 py-2'>1399</td>
    <td className='border border-green-300 px-4 py-2'>2022-12-25</td>
  </tr>

  <tr className={`${9 % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
    <td className='border border-green-300 px-4 py-2'>Quantum Logic</td>
    <td className='border border-green-300 px-4 py-2'>The Future of Computing</td>
    <td className='border border-green-300 px-4 py-2'>Leo Zhang</td>
    <td className='border border-green-300 px-4 py-2'>4599</td>
    <td className='border border-green-300 px-4 py-2'>2025-06-17</td>
  </tr>
                       
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Home