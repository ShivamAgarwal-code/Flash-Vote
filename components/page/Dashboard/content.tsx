"use client";
import { BetCard } from "@/components/common/card";
import TopToken from "@/components/common/topToken";
// import Image from "next/image";
import React, { useState } from "react";

interface TapCardProps {
  id: number;
  title: string;
  svg: (isActive: boolean) => React.ReactNode;
}

const tabs: TapCardProps[] = [
  {
    id: 1,
    title: "All Duels",
    svg: (isActive: boolean) => (
      <svg
        width="169"
        height="169"
        viewBox="0 0 169 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[169px] md:h-[169px]"
      >
        <path
          d="M88.5698 60.5538H122.067C130.614 60.5538 135.552 70.3309 130.521 77.2971L77.0323 151.358C71.0733 159.609 58.1205 155.36 58.1205 145.155V109.423C58.1205 101.546 51.7862 95.1616 43.9723 95.1616H10.476C1.9273 95.1616 -3.00967 85.3845 2.02141 78.4183L55.5098 4.35721C61.4688 -3.89377 74.4216 0.354794 74.4216 10.5604V46.2935C74.4216 54.1692 80.756 60.5538 88.5698 60.5538Z"
          fill={isActive ? "#FA764C" : "#444649"}
          fillOpacity="0.2"
        />
        <path
          d="M146.24 169C158.81 169 169 158.729 169 146.06C169 133.39 158.81 123.119 146.24 123.119C133.67 123.119 123.48 133.39 123.48 146.06C123.48 158.729 133.67 169 146.24 169Z"
          fill={isActive ? "#FA764C" : "#444649"}
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "US Election",
    svg: (isActive: boolean) => (
      <svg
        width="190"
        height="179"
        viewBox="0 0 190 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[169px] md:h-[169px]"
      >
        <path
          d="M119 -27.5625C57.3877 -27.5625 7.4375 22.3877 7.4375 84C7.4375 145.612 57.3877 195.562 119 195.562C180.612 195.562 230.562 145.612 230.562 84C230.562 22.3877 180.612 -27.5625 119 -27.5625ZM71.4446 176.582C62.7613 172.108 54.7507 166.435 47.6483 159.729H190.355C183.253 166.435 175.242 172.108 166.559 176.582H71.4446ZM33.1712 142.864C29.5188 137.55 26.3679 131.908 23.7591 126.011H214.245C211.636 131.908 208.485 137.55 204.832 142.864H33.1712ZM17.9653 109.157C16.5954 103.623 15.6825 97.9845 15.2357 92.3002H222.768C222.321 97.9845 221.408 103.623 220.038 109.157H17.9653ZM31.7618 27.2556H33.1675L34.3836 23.4327C34.6166 23.098 34.8509 22.7683 35.0864 22.4435L36.6185 27.2556H42.2041L37.6858 30.833L39.415 36.374L34.8893 33.0829L30.371 36.4595L32.1003 30.8219L30.3524 29.4422C30.8098 28.7096 31.2896 27.9845 31.7618 27.2556ZM39.4188 80.2589L34.893 76.9641L30.3748 80.3408L32.104 74.7031L27.582 71.1331H33.1675L34.893 65.7112L36.6222 71.1331H42.2078L37.6895 74.7106L39.4188 80.2589ZM108.03 -0.103251L109.759 5.31497H115.344L110.822 8.89613L112.552 14.4371L108.03 11.1423L103.508 14.5189L105.237 8.88497L100.715 5.31125H106.3L108.03 -0.103251ZM106.3 49.1962L108.03 43.778L109.759 49.1962H115.344L110.822 52.7774L112.552 58.3183L108.03 55.0235L103.508 58.4038L105.237 52.7662L100.715 49.1925L106.3 49.1962ZM96.1929 30.833L97.9221 36.374L93.4038 33.0829L88.8781 36.4632L90.6073 30.8256L86.0891 27.2556H91.6746L93.4038 21.8337L95.1331 27.2556H100.715L96.1929 30.833ZM97.9221 80.2589L93.4038 76.9641L88.8781 80.3445L90.6073 74.7068L86.0891 71.1368H91.6746L93.4038 65.7149L95.1331 71.1368H100.715L96.1929 74.7143L97.9221 80.2589ZM81.5708 8.89613L83.3 14.4371L78.778 11.1423L74.256 14.5189L75.9852 8.88497L71.4632 5.31125H77.0488L78.778 -0.106968L80.5072 5.31125H86.0928L81.5708 8.89613ZM77.0488 49.1962L78.778 43.778L80.5072 49.1962H86.0928L81.5708 52.7774L83.3 58.3183L78.778 55.0235L74.256 58.4038L75.9852 52.7662L71.4632 49.1925L77.0488 49.1962ZM66.9412 30.833L68.6704 36.374L64.1484 33.0829L59.6264 36.4595L61.3557 30.8219L56.8337 27.2519H62.4192L64.1484 21.8299L65.8777 27.2519H71.4632L66.9412 30.833ZM62.4192 71.1368L64.1484 65.7149L65.8777 71.1368H71.4632L66.9412 74.7143L68.6704 80.2589L64.1484 76.9641L59.6264 80.3408L61.3557 74.7031L56.8337 71.1331L62.4192 71.1368ZM52.3117 52.7774L54.0409 58.3183L49.5189 55.0235L45.0006 58.4038L46.7261 52.7662L42.2041 49.1925H47.7897L49.5189 43.7743L51.2481 49.1925H56.8337L52.3117 52.7774ZM119 58.5823H219.971C221.347 64.0415 222.27 69.6754 222.742 75.4357H119V58.5823ZM119 41.7253V24.8719H204.639C208.316 30.1833 211.491 35.8255 214.122 41.7253H119ZM119 8.00734V-8.84975H166.035C174.805 -4.39454 182.899 1.28091 190.076 8.00734H119ZM94.9211 -17.2839L95.1331 -16.6219H100.715L96.1929 -13.0445L97.9221 -7.50356L93.4038 -10.7984L88.8781 -7.41803L90.6073 -13.0557L87.7402 -15.3241C90.1097 -16.0627 92.5049 -16.7164 94.9211 -17.2839ZM51.2481 5.31497H56.8337L52.3117 8.89613L54.0409 14.4371L49.5189 11.1423L45.0006 14.5189L46.6145 9.25312C48.0946 7.82016 49.6156 6.43307 51.1774 5.09184L51.2481 5.31497ZM21.9964 49.1962H27.582L23.06 52.7774L24.7892 58.3183L20.2672 55.0235L18.6681 56.2172C19.4813 53.2744 20.4172 50.3862 21.4758 47.5525L21.9964 49.1962Z"
          fill={isActive ? "#FA764C" : "#444649"}
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Crypto",
    svg: (isActive: boolean) => (
      <svg
        width="211"
        height="179"
        viewBox="0 0 211 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[169px] md:h-[169px]"
      >
        <path
          d="M133.5 200.75C194.943 200.75 244.75 150.943 244.75 89.5C244.75 28.0566 194.943 -21.75 133.5 -21.75C72.0566 -21.75 22.25 28.0566 22.25 89.5C22.25 150.943 72.0566 200.75 133.5 200.75ZM185.854 73.5245C183.918 85.2391 177.789 90.9574 169.489 92.9821C180.525 99.1565 185.843 108.535 180.158 124.989C173.094 145.615 157.274 147.484 136.326 143.49L130.919 165.261L118.748 162.246L124.144 140.475C122.764 140.111 121.381 139.774 119.994 139.462C118.081 139.017 116.101 138.561 114.143 137.994L108.747 159.766L96.5984 156.762L101.994 134.979L77.786 128.393L83.7935 112.996C83.7935 112.996 92.9382 115.51 92.8047 115.355C96.1868 116.178 97.8444 113.797 98.523 112.15L107.156 77.2514L113.453 52.4426C113.72 49.7615 112.874 46.246 107.924 44.911C108.257 44.7219 99.0236 42.7083 99.0236 42.7083L102.617 28.1122L127.57 34.2978L132.855 12.9711L145.426 16.0861L140.142 37.4127C143.379 38.1247 146.527 38.9702 149.776 39.8046L155.049 18.478L167.287 21.504L161.858 43.3869C177.288 49.0606 188.402 57.4378 185.854 73.5245ZM129.117 77.8633C136.426 80.066 158.097 86.5741 161.746 72.0782C165.151 58.2832 146.372 54.078 137.65 52.12C136.611 51.8975 135.74 51.6935 135.035 51.5081L128.505 77.6852L129.117 77.8633ZM117.836 120.361L118.893 120.683C127.904 123.353 153.447 130.952 156.918 116.567C160.478 102.705 137.516 97.3098 127.226 94.8845C126.091 94.6249 125.134 94.395 124.355 94.1947L117.836 120.361Z"
          fill={isActive ? "#FA764C" : "#444649"}
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sports",
    svg: (isActive: boolean) => (
      <svg
        width="188"
        height="179"
        viewBox="0 0 188 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[169px] md:h-[169px]"
      >
        <path
          d="M31.4363 84.2503C31.9066 74.7675 33.66 65.7931 36.6964 57.3271C39.7328 48.8611 43.9347 41.0384 49.302 33.8589C55.7553 40.4781 61.0465 48.2283 65.1758 57.1093C69.305 65.9902 71.7086 75.0373 72.3864 84.2503H31.4363ZM176.614 84.2503C177.292 75.0373 179.553 66.132 183.399 57.5346C187.245 48.9372 192.678 41.2632 199.698 34.5125C205.072 41.6574 209.278 49.4387 212.314 57.8562C215.35 66.2738 217.097 75.0718 217.553 84.2503H176.614ZM49.302 144.487C43.9278 137.343 39.7916 129.637 36.8935 121.372C33.9885 113.107 32.1729 104.232 31.4467 94.7497H72.3864C71.7086 103.97 69.305 112.875 65.1758 121.465C61.0465 130.056 55.7553 137.73 49.302 144.487ZM199.698 144.487C192.678 137.73 187.245 130.052 183.399 121.455C179.553 112.858 177.292 103.956 176.614 94.7497H217.553C217.09 103.928 215.344 112.726 212.314 121.144C209.285 129.561 205.079 137.343 199.698 144.487ZM83.0208 84.2503C82.3014 73.1352 79.5936 62.7014 74.8972 52.9489C70.2077 43.1964 63.872 34.35 55.8902 26.4096C63.9204 17.7154 73.3859 10.7261 84.2865 5.44175C95.1872 0.157418 106.842 -2.84096 119.25 -3.55338V84.2503H83.0208ZM129.75 84.2503V-3.55338C142.158 -2.83404 153.813 0.164334 164.714 5.44175C175.614 10.7192 185.083 17.7085 193.12 26.4096C184.959 33.9142 178.575 42.65 173.968 52.6169C169.362 62.5907 166.699 73.1386 165.979 84.2606L129.75 84.2503ZM119.25 182.553C106.537 181.841 94.8068 178.763 84.0583 173.32C73.3098 167.89 63.9169 160.828 55.8798 152.134C64.0414 144.498 70.4255 135.838 75.032 126.155C79.6385 116.472 82.3014 106.003 83.0208 94.7497H119.25V182.553ZM129.75 182.553V94.7497H165.979C166.699 106.003 169.362 116.582 173.968 126.487C178.575 136.392 184.959 145.093 193.12 152.59C185.083 161.292 175.614 168.281 164.714 173.558C153.813 178.836 142.158 181.834 129.75 182.553Z"
          fill={isActive ? "#FA764C" : "#444649"}
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
];

interface SubTabProps {
  id: number;
  title: string;
}

const subTab: SubTabProps[] = [
  {id: 1, title: "Live Duels"},
  {id: 2, title: "Bootstrapping"},
  {id: 3, title: "Completed"},
]

interface BetCardProps{
  tap: number;
  subTap: number;
  imgSrc: string;
  volume: number;
  time: number;
  chance: string;
  percentage: number;
}

const BetCardList: BetCardProps[] = [
  {
    tap: 3,
    subTap: 1,
    imgSrc: '/img/crypto.png',
    volume: 2333,
    time: 12345678,
    chance: 'string',
    percentage:60,
  },
  {
    tap: 2,
    subTap: 1,
    imgSrc: '/img/trump.png',
    volume: 2333,
    time: 12345678,
    chance: 'string',  
    percentage:90,
  },
  {
    tap: 2,
    subTap: 1,
    imgSrc: '/img/kamala.png',
    volume: 2333,
    time: 12345678,
    chance: 'string',  
    percentage:10,
  },
  {
    tap: 4,
    subTap: 1,
    imgSrc: '/img/Avatar.png',
    volume: 2333,
    time: 12345678,
    chance: 'string',  
    percentage:60,
  },
]

type CryptoData = {
  name: string,
  symbol: string,
  volume_24h: number,
  price: number,
  image: string,
  createdBy: number
};

interface ContentProps {
  cryptos: CryptoData[];
}

const Content: React.FC<ContentProps> = ({cryptos}) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [subAactiveTab, setSubActiveTab] = useState<number>(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };
  const handleSubTabClick = (id: number) => {
    setSubActiveTab(id);
  };
  return (
    <div className="flex flex-col gap-6 py-6 md:px-[50px] px-[15px]">
      <div className="flex flex-col gap-3 items-center justify-between h-[300px] overflow-y-auto md:px-10 md:mx-64 px-10 shadow-md">
        <div className="grid grid-cols-3 items-center w-full p-5 justify-between">
          <div className="flex flex-row justify-start ml-[-20px] items-center text-center gap-0"> {/* Adjusted ml from -10px to -20px */}
            <p className="text-center text-white"><span className="text-2xl">Name</span></p>
          </div>
          <div className="flex justify-start ml-[-3px] flex-row text-center">
            <p className="text-2xl text-white">Price</p>
          </div>
          <div className="flex justify-start ml-5 flex-row text-center">
            <p className="text-2xl text-white">Volume(24h)</p>
          </div>
        </div>
        {cryptos.map((crypto, index) => (
          <TopToken key={index} {...crypto} />
        ))}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`
                flex relative md:h-[179px] hover:cursor-pointer bg-gradient-to-tr rounded-lg from-[#101010] to-[#000000] border-[2px] p-4
                ${
                  activeTab === tab.id
                    ? "border-[#FA764C] shadow-[inset_0px_4px_6px_rgba(228,87,42,0.2),inset_0px_-4px_6px_rgba(228,87,42,0.2),inset_4px_0px_6px_rgba(228,87,42,0.2),inset_-4px_0px_6px_rgba(228,87,42,0.2)]"
                    : "border-gray-600"
                }
              `}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className="absolute top-0 right-0">
              {tab.svg(activeTab === tab.id)}
            </div>
            <span className="md:pt-[120px] pt-[30px] text-[#444649] md:ml-6 ml-2">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row rounded-lg md:w-1/3 sm:w-1/2 w-full items-center justify-start gap-6 border py-2 px-1">
        {
          subTab.map((sub) => 
            <button
              key={sub.id}
              className={`font-medium flex p-1 ${
                subAactiveTab === sub.id
                  ? 'bg-[#FA764C] text-gray-200 rounded-lg'
                  : 'text-gray-500'
              }`}
              onClick={() => handleSubTabClick(sub.id)}
            >
              {sub.title}
            </button>
          )
        }
      </div>
      <div className="-mt-2 grid md:grid-cols-4 grid-cols-1 gap-5">
        {
          BetCardList.map((card, index) =>
            activeTab === 1 || card.tap === activeTab ? (
              <BetCard
                key={index} // Make sure to include a key when rendering lists in React
                imgSrc={card.imgSrc}
                volume={card.volume}
                time={card.time}
                chance={card.chance}
                percentage={card.percentage}
              />
            ) : null // If the condition is false, return null (i.e., render nothing)
          )
        }
      </div>
    </div>
  );
};

export default Content;
