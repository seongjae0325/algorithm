//trial case 1
// const matrix = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]

// const graph = {}

// matrix.forEach((rows,rowsIndex) => {
//   rows.forEach((item,itemIndex) => {
//     if(item === 0) return
//     const key = `${rowsIndex}${itemIndex}`

//     graph[key] = []
//     if(rowsIndex > 0 && matrix[rowsIndex-1][itemIndex]) graph[key].push(`${rowsIndex-1}${itemIndex}`)
//     if(itemIndex > 0 && matrix[rowsIndex][itemIndex-1])graph[key].push(`${rowsIndex}${itemIndex - 1}`)
//     if(itemIndex < 4 && matrix[rowsIndex][itemIndex+1]) graph[key].push(`${rowsIndex}${itemIndex + 1}`)
//     if(rowsIndex < 4 && matrix[rowsIndex+1][itemIndex])graph[key].push(`${rowsIndex+ 1}${itemIndex}`)
//   })
// })

// graph

// const bfs = () => {
//   const visited = []
//   let needVisited = []
//   const visitedNode = {}
//   needVisited.push('00')

//   while(needVisited.length !==0){
//     const node = needVisited.shift()


//     if(!visited.includes(node)){
//       visited.push(node)
//       if(visitedNode[node] === unedifined) visitedNode[node] = []
//       visitedNode[node].push()

//       needVisited = [...needVisited , ...graph[node]]
//     }
//   }

//   return visited
// }

//case2
function solution(maps) {
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  const queue = []
  const m = maps.length -1
  const n = maps[0].length -1
  let copiedMatrix = maps
  let counter = 1

  copiedMatrix[0][0] = 0
  queue.push([0,0])

  while(queue.length !== 0){

    const size = queue.length


    for(let i = 0 ; i < size ; i++){
      const [x,y] = queue.shift()

      for(let j = 0 ; j < 4; j++){
        const nx = x + dx[j]
        const ny = y + dy[j]

        if(nx > -1 && ny > -1 && nx < m + 1 && ny < n + 1 &&  copiedMatrix[nx][ny] === 1){
          if(nx === m && ny === n){
            return ++counter
          }


          queue.push([nx,ny])
          copiedMatrix[nx][ny] = 0
        }

      }
    }

    counter++
  }


  return -1
}