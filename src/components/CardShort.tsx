interface Props {
    name: string,
  }
  
  export const CardShort = (props: Props) => {
    const srcUrl = `cards/${props.name}.jpg`;
    return (
        <img src={srcUrl} style={{
          height: '200px',
        }}/>
    )
  }