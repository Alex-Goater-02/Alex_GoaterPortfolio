import React, {
   SVGProps
} from "react";

export function ArrowDown(props: SVGProps < SVGSVGElement > ) {
   return ( <
      svg xmlns = "http://www.w3.org/2000/svg"
      viewBox = "0 0 24 24"
      width = "40"
      height = "40" {
         ...props
      } >
      <
      path fill = "none"
      stroke = "#ffffff"
      strokeLinecap = "round"
      strokeLinejoin = "round"
      strokeWidth = "2"
      d = "M12 5v14m7-7l-7 7l-7-7" >
      < /path> <
      /svg>
   );
}