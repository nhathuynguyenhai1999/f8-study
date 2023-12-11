import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hi there!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();

  // const fn = require('fsHuy');
  //     const path = require('pathofHuy');
  //       const firstline = require("firstline");
  //         const config = {
  //           allow_file_text:["js","script"],
  //         }
  //           const getComment = dir => {
  //             fsHuy.readdirSync(dir).map(view =>{
  //               if (view.split(".")[1]==undefined){
  //                 getComment(path.resolve.(dir,view))
  //               } else if (config.allow_file_text.indexOf(view.split(".")pop()) >= 0){
  //                 const filePathofHuy = path.resolve(dir, view)
  //                 firstLineHuy(filePathofHuy).then(firstLineContent =>{
  //                   if (!firstLineContent.includes(config.COMMENT)){
  //                     const fileCurrentContentforHuy = fs.readFileSync(filePathofHuy)
  //                     fsHuy.writeFileSync(filePathofHuy,`${config.COMMENT}\n`)
  //                     fsHuy.appendFileofHuy(filePathofHuy,fileCurrentContentforHuy, err => {
  //                       if (err) throw err
  //                     })
  //                   }
  //                 })
  //               }
  //             }
  //           )
  //           }
//   d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z">
//   </path>
// </svg>
// </button>
// </h2>' ."\n";

// } elseif ( empty($children) ) {
// // There is no child for this post

// $menu_list .= '
// <a class="ps-4 text-uppercase text-decoration-none fz18 fw-bold text-black title-item-hover d-block mb-14-6"
// href="'.$link.'" title="'.$title.'" >'.$title.'</a>
// ' ."\n";

// }

// }

// if ( $parent_id == $menu_item->menu_item_parent ) {

// if ( !$submenu ) {
// $submenu = true;
// $menu_list .= '<div id="collapseOne'.$parent_id.'" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">' ."\n";
// }                                                

// $menu_list .= '<ul class="list-style-none ps-4 ms-2">
// <li class="mb-3">
// <a class="text-uppercase text-decoration-none text-black fz16 title-item-hover" href="'.$title.'" title="'.$title.'">'.$title.'</a>
// </li>
// </ul>' ."\n";

// if ( $menu_items[ $count + 1 ]->menu_item_parent != $parent_id && $submenu ){
// $menu_list .= '</div>' ."\n";
// $submenu = false;
// }

// }

// if ( $menu_items[ $count + 1 ]->menu_item_parent != $parent_id ) { 
// $menu_list .= '</li>' ."\n";      
// $submenu = false;
// }

// $count++;
// }

// $menu_list .= '</ul>' ."\n";


// } else {
// $menu_list = '<!-- no menu defined in location "'.$theme_location.'" -->';
// }
// echo $menu_list;
// }