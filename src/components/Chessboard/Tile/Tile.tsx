import './Tile.css'

interface Props {
  image?: string; // ? denotes that image can be null
  number: number;
}

// tutorial 3, 3:00 for why image is in div (className chess-piece)

export default function Tile({ number, image }: Props){
  if(number % 2 != 0){
      return (
        <div className="tile black-tile">
          {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
        </div>
      )
  } else {
      return (
      <div className="tile white-tile">
        {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
      </div>
      )
  }

}
