import heapq

def prim_optimized(adjacency_list):
    n = len(adjacency_list)
    visited = [False]*n
    mst_weight=0
    mst_edges=[]

    min_heap=[(0,-1,0)]
    
    while min_heap:
        weight, u, v= heapq.heappop(min_heap)
        if visited[v]:
            continue
        visited[v]=True
        mst_weight+=weight

        if u!=-1:
            mst_edges.append((u,v,weight))
        for neighbour,wt in adjacency_list[v].items():
            if not visited[neighbour]:
                heapq.heappush(min_heap,(wt,v,neighbour))
    print("mst weight:", mst_weight)
    print("mst edges:")
    for edge in mst_edges:
        print(edge)

adjacency_list= [
   {1:5, 3:4},
   {0:5, 2:3, 3:2},
   {1:3, 3:6},
   {0:4, 1:2, 2:6}
]

if __name__=='__main__':
   prim_optimized(adjacency_list)


    