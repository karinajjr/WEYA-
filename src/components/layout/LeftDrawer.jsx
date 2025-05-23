import React from "react";

function LeftDrawer() {
  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full md:w-10/12 lg:w-8/12  xl:w-5/12 p-8 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <div className="flex justify-end items-center border border-gray-300 dark:border-gray-600 rounded-md py-4 px-4 lg:px-8 mb-3">
            <label htmlFor="my-drawer" className="btn btn-sm btn-error">
              <i className="bi bi-x-lg flex justify-center items-center"></i>
              <span>Yopish</span>
            </label>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 lg:p-8 mb-3">
            <h1 className="text-2xl font-semibold text-start">
              Data sayns va Sunʼiy intellekt
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              dolore incidunt tenetur explicabo nulla hic debitis adipisci vero
              reiciendis eveniet dicta nihil necessitatibus, aliquid harum quas,
              consequatur illum ipsam provident excepturi! Possimus iste
              architecto ut placeat! Itaque iusto ut, suscipit explicabo sunt
              eveniet obcaecati at. Ex atque corporis explicabo voluptas maiores
              labore nesciunt repudiandae molestiae ipsam aperiam vero expedita
              rem voluptate, corrupti totam minima reprehenderit eum eligendi,
              quos sapiente cumque debitis molestias modi. Expedita maiores,
              eius qui natus doloribus aperiam.
            </p>
            <div className="mt-4 mb-2 flex justify-center items-center gap-4 w-full">
              <button className="btn flex-1 hover:border-gray-400 dark:hover:border-gray-600 border border-gray-300 dark:border-gray-700 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
                Buy now
              </button>
              <button className="btn flex-1 hover:border-gray-400 dark:hover:border-gray-600 border border-gray-300 dark:border-gray-700 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 flex justify-center items-center gap-2">
                <i className="bi bi-play-circle flex justify-center items-center"></i>
                <span className="[line-height:0]">Free section</span>
              </button>
            </div>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 lg:p-8 mb-3">
            <h1 className="text-2xl font-semibold text-start">
              Kursdan nimani kutishingiz mumkin?
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="">
                <div className="inline-block p-4 rounded-full bg-sky-200">
                  <i className="bi bi-book-fill flex justify-center items-center text-sky-500"></i>
                </div>
                <h2 className="my-2 font-semibold text-xl">
                  Bilim va ko'nikmalar
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam earum ad sunt laboriosam, eveniet omnis.
                </p>
              </div>
              <div className="">
                <div className="inline-block p-4 rounded-full bg-red-200">
                  <i className="bi bi-folder-fill flex justify-center items-center text-red-500"></i>
                </div>
                <h2 className="my-2 font-semibold text-xl">
                  Bilim va ko'nikmalar
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam earum ad sunt laboriosam, eveniet omnis.
                </p>
              </div>
              <div className="">
                <div className="inline-block p-4 rounded-full bg-green-200">
                  <i className="bi bi-person-workspace flex justify-center items-center text-green-500"></i>
                </div>
                <h2 className="my-2 font-semibold text-xl">
                  Bilim va ko'nikmalar
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam earum ad sunt laboriosam, eveniet omnis.
                </p>
              </div>
              <div className="">
                <div className="inline-block p-4 rounded-full bg-gray-200">
                  <i className="bi bi-box-fill flex justify-center items-center text-gray-500"></i>
                </div>
                <h2 className="my-2 font-semibold text-xl">
                  Bilim va ko'nikmalar
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam earum ad sunt laboriosam, eveniet omnis.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 lg:p-8 mb-3">
            <h1 className="text-2xl font-semibold text-start">
              Data sayns nima?
            </h1>
            <p className="mt-4">
              Data sayns muhandislari terabaytlab axborotlarni tahlil qilish,
              ulardan foydali maʼlumotlarni olish, bevosita modellar yaratish
              bilan shugʻullanadi. Zamonaviy sunʼiy intellekt asosida ishlovchi
              dasturlarni yaratish uchun juda katta hajmdagi maʼlumotlarga
              ishlov berish talab etiladi. Buni esa Data sayns mutaxassislari
              bajaradi. Masalan, ChatGPT dasturini yaratish uchun 45TB matnlarga
              ishlov berilgan. Tesla oʻziyurar mashinalari esa 56 mln km
              masofadagi videolarni “oʻrganib” chiqqan.
            </p>
            <div className="mt-4 mb-2 flex justify-center items-center gap-4 w-full">
              <img
                className="w-65"
                src="/assets/logo/data-science.png"
                alt="Logo"
              />
            </div>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 lg:p-8">
            <h1 className="text-2xl font-semibold text-start">
              Kurs qay tartibda oʻtiladi?
            </h1>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-4 items-start">
                <div className="inline-block p-4 rounded-full bg-purple-200 mt-3">
                  <i className="bi bi-people-fill flex justify-center items-center text-purple-500"></i>
                </div>
                <div>
                  <h2 className="my-2 font-semibold text-xl">Yopiq guruh</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam earum ad sunt laboriosam, eveniet omnis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="inline-block p-4 rounded-full bg-orange-200 mt-3">
                  <i className="bi bi-folder-fill flex justify-center items-center text-orange-500"></i>
                </div>
                <div>
                  <h2 className="my-2 font-semibold text-xl">
                    Onlayn uchrashuvlar
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam earum ad sunt laboriosam, eveniet omnis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="inline-block p-4 rounded-full bg-green-200 mt-3">
                  <i className="bi bi-camera-reels-fill flex justify-center items-center text-green-500"></i>
                </div>
                <div>
                  <h2 className="my-2 font-semibold text-xl">Videodarslar</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam earum ad sunt laboriosam, eveniet omnis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="inline-block p-4 rounded-full bg-gray-200 mt-3">
                  <i className="bi bi-bar-chart-fill flex justify-center items-center text-gray-500"></i>
                </div>
                <div>
                  <h2 className="my-2 font-semibold text-xl">Vazifalar</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam earum ad sunt laboriosam, eveniet omnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftDrawer;
