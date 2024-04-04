import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";

export default function Heart({ isLow }: { isLow: boolean }) {
  // SEVERE || LOW
  return (
    <div>
      <FavoriteIcon
        className={`absolute -top-2 ${isLow ? "-left-2" : "-right-2"}`}
        style={{
          fontSize: "2rem",
          color: "#F87A8F",
        }}
      ></FavoriteIcon>
      <FavoriteIcon
        className={`absolute -top-0.5 ${isLow ? "-left-0.5 " : "-right-0.5"}`}
        style={{
          fontSize: "1.25rem",
          color: "#F88094",
        }}
      />
      <CircleIcon
        className={`absolute top-0.5  ${isLow ? "left-3" : "right-0"}`}
        style={{
          fontSize: "0.2rem",
          color: "#F9A9B6",
        }}
      />
      <NightlightRoundSharpIcon
        className={`absolute -top-0.5 ${isLow ? "-left-1 " : "right-2.5"}`}
        style={{
          transform: "rotate(45deg)",
          fontSize: "0.65rem",
          color: "#F89CAC",
        }}
      />
    </div>
  );
}
