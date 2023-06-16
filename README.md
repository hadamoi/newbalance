# 👟 Product list scroll animation
As you scroll through the product list, the image of that product is displayed with a fade effect applied.

### Things to remember
```sh
  for(let i = 0; i < totalNumber; i++) {
    if(scroll > section[i].offsetTop - window.outerHeight/1.5 && scroll < section[i].offsetTop - this.window.outerHeight/1.5 + section[i].offsetHeight){
      sectionNumber = i;
      break;
    }
  }
```
Using the offsetTop of the section and the outerHeight of the window, determine the position of the scroll. <br />
Run the animation with these values.
