/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProps {
  title: string; // або інші властивості, які вам потрібні
}

class Component<T extends ComponentProps> {
  constructor (public props:T) {

  }
}

class Page extends Component<{title:string}> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};