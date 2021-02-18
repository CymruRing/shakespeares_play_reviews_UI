import Image from 'next/image'

const Stars = ({rating}) => {

  let fills = [];
  for(let i = 0; i < 5; i++) {
    if(rating - .7 >= 0) {
      fills.push(['/starFilled.png', i]);
      rating -= 1;
    } else if (rating - .4 >= 0) {
      fills.push(['/starHalf.png', i]);
      rating -= 1;
    } else {
      fills.push(['/starEmpty.png', i]);
    }
  }

  return (
    <span>
      {fills.map((star) => {
        return <Image src={star[0]} key={star[1]} width='15px' height='15px' />
      })}
    </span>
  )
}

export default Stars;