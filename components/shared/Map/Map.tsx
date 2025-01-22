// "use client"
// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// interface Props {
//   className?: string;
// }

// export const Map = ({ className }: Props) => {
//   useEffect(() => {
//     const map = L.map('map', {
//       center: [41.247113, 69.158403], // Центр Ташкента
//       zoom: 13,
//     });

//     // Используем минималистичный стиль CartoDB Positron
//     L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//       attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
//     }).addTo(map);

//     // Настраиваем кастомную иконку для маркера
//     const customIcon = L.icon({
//       iconUrl: '/svg/map/Map pins.svg', // Путь к вашему SVG
//       iconSize: [30, 40], // Размер иконки
//       iconAnchor: [15, 40], // Точка якоря (чтобы маркер "указал" на координату)
//     });

//     // Добавляем маркер с кастомной иконкой
//     L.marker([41.247113, 69.158403], { icon: customIcon })
//       .addTo(map)
//       .on('click', ()=> {
//         window.open("https://yandex.com.tr/harita/10335/tashkent/?ll=69.160185%2C41.247719&mode=poi&poi%5Bpoint%5D=69.158403%2C41.247113&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D203824394596&z=17.78", "_blank")
//       })
//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div id="map" className={`w-full h-[400px] ${className}`} />;
// };
