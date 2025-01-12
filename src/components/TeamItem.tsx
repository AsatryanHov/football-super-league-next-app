"use client";
import Image from "next/image";
import "@/styles/TeamItem.css";
function getRatingColor(rating: number): string {
  if (rating >= 7.25) return "#049EA1";
  if (rating >= 7.2) return "#65B300";
  if (rating >= 7.15) return "#C4CC00";
  if (rating >= 7.1) return "#FABA00";
  if (rating >= 6.95) return "#FF7B00";
  if (rating >= 6.85) return "#E91D27";
  return "#FFFFFF";
}
interface TeamItemProps {
  data?: {
    avgRating?: number;
    goalsScored?: number;
    assists?: number;
    // logo?: string;
    [key: string]: any;
  };
  teamName: string;
  logo?: string;
  teamRating?: any;
  position?: any;
}

const TeamItem: React.FC<TeamItemProps> = ({
  data,
  teamName,
  logo,
  teamRating,
  position,
}) => {
  const rating = Number(teamRating);
  const ratingBgColor = getRatingColor(rating);
  if (!data) {
    return (
      // <div className="team-item">
      //   <h3>{teamName}</h3>
      //   <p>No statistics available.</p>
      // </div>
      // <div>Loading...</div>
      <></>
    );
  }
  // console.log(typeof logo);
  return (
    <div className="team-block-wrapper">
      <div className="team-block">
        <div
          className="position"
          style={{
            color: ratingBgColor,
            borderColor: ratingBgColor,
          }}>
          {position}
        </div>
        <div className="team-logo">
          {logo && (
            <Image
              className="team-logo-img"
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />
          )}
        </div>
        <div className="team-block-name">{teamName}</div>
        <div className="team-statistics-numbers-block">
          {/* Team Performance Stats */}
          <div className="goal-per-game team-statistic-item">
            {(data.goalsScored! / data.matches).toFixed(2)}
          </div>
          <div className="missedgoalpergame team-statistic-item">
            {(data.goalsConceded / data.matches).toFixed(2)}
          </div>
          <div className=" team-statistic-item">{data.cleanSheets}</div>
          {/* Team Performance Stats END*/}
          {/* Shooting & Attacking Stats */}
          <div className=" team-statistic-item">
            {(data.shots / data.matches).toFixed(1)}
          </div>
          <div className="shootontarget team-statistic-item">
            {(data.shotsOnTarget / data.matches).toFixed(1)}
          </div>
          <div className="bigChances team-statistic-item">
            {(data.bigChances / data.matches).toFixed(1)}
          </div>
          <div className="bigchancesCreated team-statistic-item">
            {(data.bigChancesCreated / data.matches).toFixed(1)}
          </div>
          {/* <div className="bigchancesCreated team-statistic-item">
            {(data.bigChancesMissed / data.matches).toFixed(1)}
          </div> */}

          {/* Shooting & Attacking Stats END*/}

          {/* Passes & Possession */}
          <div className=" team-statistic-item">
            {data.averageBallPossession.toFixed(1)}
          </div>

          <div className=" team-statistic-item">
            {data.accuratePassesPercentage.toFixed(1)}
          </div>
          {/* Passes & Possession END*/}

          {/* Defensive Stats*/}
          <div className=" team-statistic-item">
            {(data.tackles / data.matches).toFixed(1)}
          </div>

          <div className=" team-statistic-item">
            {(data.interceptions / data.matches).toFixed(1)}
          </div>
          <div className=" team-statistic-item">
            {(data.clearances / data.matches).toFixed(1)}
          </div>
          <div className=" team-statistic-item">
            {(data.errorsLeadingToGoal / data.matches).toFixed(1)}
          </div>

          <div className=" team-statistic-item">
            {(data.fouls / data.matches).toFixed(1)}
          </div>
          {/* Defensive Stats END*/}

          {/* Duels & Challenges*/}
          <div className=" team-statistic-item">
            {data.duelsWonPercentage.toFixed(1)}
          </div>
          {/* Duels & Challenges END*/}
          {/* <div className=" team-statistic-item">{data.hitWoodwork}</div> */}
          {/* Goalkeeper & Defense Stats*/}
          <div className=" team-statistic-item">
            {(data.saves / data.matches).toFixed(1)}
          </div>
          <div className=" team-statistic-item">
            {(data.shotsAgainst / data.matches).toFixed(1)}
          </div>
          <div className=" team-statistic-item">
            {(data.shotsBlockedAgainst / data.matches).toFixed(1)}
          </div>
          <div className=" team-statistic-item">
            {(data.interceptionsAgainst / data.matches).toFixed(1)}
          </div>
          {/* Goalkeeper & Defense Stats END*/}
        </div>
        {/* Average Ball Possession */}
        {/* //------------------------------------------------------------------------ */}
        <div
          className="team-block-rating"
          style={{ backgroundColor: ratingBgColor }}>
          {data.avgRating!.toFixed(3)}
        </div>
      </div>
      <div
        className="team-block-underline"
        style={{ backgroundColor: ratingBgColor }}></div>
    </div>
  );
};

export default TeamItem;
