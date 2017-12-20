### laravel导出excel的实例
    public function export(Request $req)
     {
           //从数据库查询数据对象
           $data = DB::connection('mysql_1')->table('today_data')->get();
           //函数处理,如果不支持,array_map()和toArray()函数
           $d =[];
           foreach ($data as $k=>$v) {
               $m = [];
               foreach ($v as $i=>$j) {
                   $m[$i] = $j;
               }
               $d[$k] = $m;
           }

     //将对象转换为excel工具需要的二维数组

     //$d = array_map('get_object_vars', $data);

     //设置表头,通过在队列前加入字段来实现,这里我们使用的是array_unshift();
     array_unshift($d, ['date'=>"date",'new'=>'new','node'=>'node','active'=>'active');

     Excel::create('导出数据'.$keywords, function ($excel) use ($d) {
         $excel->sheet('表一', function ($sheet) use ($d) {
             $sheet->rows($d);
         });
     })->export('xls');

    }  
上面的例子就是使用laravel的excel工具导出数据过程.
