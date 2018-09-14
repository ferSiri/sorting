describe('Split Array function', function() {
    it('es capar de dividir el arreglo en dos partes', function() {
        let arr = [1,2,3,4,5]
      expect(split(arr)).toEqual([ [1,2,3] , [4,5] ])
    });
});

describe('Merge', function(){
    it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
        let arr1 = [2,5,9]
        let arr2 = [3,4,8]
    expect(merge(arr1,arr2)).toEqual([2,3,4,5,8,9])
    });
  });

  describe('MergeSort', function(){

    it('se llama a si misma más de una vez', function(){
        spyOn(window, 'mergeSort').and.callThrough();
        mergeSort([4,5,7,34,54,3,18,16,21])
        expect(mergeSort.calls.count()).toBeGreaterThan(1);
    });
 });