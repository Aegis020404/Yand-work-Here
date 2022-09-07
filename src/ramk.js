export function conf (n, width, height) {
           let arr = []
           const xColumn = Math.ceil(Math.sqrt(n))
           const yColumn = Math.ceil(n / xColumn)
           const width1 = Math.round(width / xColumn)
           const height1 = Math.round(height / xColumn)
           let point = 0
           let hash = xColumn - ( xColumn * yColumn - n )
           if(hash === n) {hash = 1000 }
           else {
            point = ~~((width - hash*width1)/2)
           }
           let x = 0
           let y = 0
               for(let i = 1; i <= n; i++) {
                   let centerY = null
                   if(xColumn - yColumn) {
                       console.log(height1)
                       centerY = Math.round(height1/2)
                   }
                       arr.push({
                           width: width1,
                           height: height1,
                           x: x * width1 + point,
                           y: y * height1 + centerY,
                       })
                       if (x+1 < xColumn) {
                           x++
                           if(hash === x) {
                                x=0;y++;point=0
                                hash = NaN
                           }
                       }
                       else {
                           x=0;y++;point=0
                       }
               }
               return arr
       }
