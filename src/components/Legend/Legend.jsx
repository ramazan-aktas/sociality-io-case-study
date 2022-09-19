import LegendItem from "./LegendItem";

export default function Legend() {
  return (
    <div className="md:col-span-3 col-span-2">
      <ul className="list-none">
        <LegendItem svgColorHex={"#acacac"} name="Published" />
        <LegendItem svgColorHex={"#33cc99"} name="Scheduled" />
        <LegendItem svgColorHex={"#f7bf38"} name="Need Approval" />
        <LegendItem svgColorHex={"#fb6450"} name="Error" />
        <LegendItem svgColorHex={"#67b1f2"} name="Notes" />
      </ul>
    </div>
  );
}
