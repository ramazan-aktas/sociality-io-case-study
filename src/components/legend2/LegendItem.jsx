export default function LegendItem({ svgColorHex, name }) {
  return (
    <li className="px-3 svg-icon svg-baseline font-raleway text-[0.5rem] align-middle flex sm:inline-flex sm:text-[14px]">
      <svg viewBox="0 0 200 200" className="svg-baseline" fill={svgColorHex} width="1rem" height="1rem">
        <path
          d="
                 M 100, 100
                 m -75, 0
                 a 75,75 0 1,0 150,0
                 a 75,75 0 1,0 -150,0
                 "
        />
      </svg>
      <span className="pl-2 text-[#444444] font-medium self-center">{name}</span>
    </li>
  );
}
