// This is the library being used to calculate all cases as deifined in document
// master_dict={} we have genereated for node graph :
/*
{
	"A": [{
		"node": "B",
		"value": "1"
	}, {
		"node": "C",
		"value": "4"
	}, {
		"node": "D",
		"value": "10"
	}],
	"B": [{
		"node": "E",
		"value": "3"
	}],
	"C": [{
		"node": "D",
		"value": "4"
	}, {
		"node": "F",
		"value": "2"
	}],
	"D": [{
		"node": "E",
		"value": "1"
	}],
	"E": [{
		"node": "B",
		"value": "3"
	}, {
		"node": "A",
		"value": "2"
	}],
	"F": [{
		"node": "D",
		"value": "1"
	}]
}
*/

var input_data = require('./input_data')
var _ = require('lodash');

let master_dict={};
module.exports = {
    /*
    This function is for case 01 , it will resolve the Array and 
    validates the input from client and send to its wrapper function
    input : data string
    output: string
    */
    case01_algo: function(data){
        var input_data_array = input_data.data_array();
        if (this.validate_client_data_case01(data,input_data_array)){
            return this.case01(data);
        }
        else{
            return "Invalid Data";
        }
    },
    /*
    This function is for case 02 , it will resolve the Array and 
    validates the input from client and send to its wrapper function
    input : data string
    output: string
    */
    case02_algo: function(data){
        var input_data_array = input_data.data_array();
        if (this.validate_client_data_case01(data,input_data_array)){
            return this.case02(data);
        }
        else{
            return "Invalid Data";
        }
    },
    
    case022_algo: function(data){
        var input_data_array = input_data.data_array();
        if (this.validate_client_data_case01(data,input_data_array)){
            return this.case022(data);
        }
        else{
            return "Invalid Data";
        }
    },
    case023_algo: function(data){
        var input_data_array = input_data.data_array();
        if (this.validate_client_data_case01(data,input_data_array)){
            return this.case023(data);
        }
        else{
            return "Invalid Data";
        }
    },
    /*
    This function is for case 03 , it will resolve the Array and 
    validates the input from client and send to its wrapper function
    input : data string
    output: string
    */
    case03_algo: function(data){
        var input_data_array = input_data.data_array();
        if (this.validate_client_data_case01(data,input_data_array)){
            return this.case03(data);
        }
        else{
            return "Invalid Data";
        }
    },
    case032_algo: function(data){
        var input_data_array = input_data.data_array();
        if (this.validate_client_data_case01(data,input_data_array)){
            return this.case032(data);
        }
        else{
            return "Invalid Data";
        }
    },
    /*
    This function validates the input from client.
    input : data string, input_data_array array
    output: boolean
    */
    validate_client_data_case01: function(data,input_data_array){
       
        if(!data.data.includes("-")){
            return false
        }
        return true
    },
    /*
    This function generates the dict from array with parent child dependency for graph
    the sample code is mentioned on top.
    input : None
    output: dict{}
    */
    return_dict: function(){
        let master_dict={};
        _.forEach(input_data.data_array(), function(single_path) {
           let convert_to_sinlge_node_array = single_path.split("")

           if (convert_to_sinlge_node_array[0] in master_dict){
                let temp_dict ={}
                let temp_array=[]
                temp_dict["node"]=convert_to_sinlge_node_array[1]
                temp_dict["value"]=single_path.substring(2);
                temp_array.push(temp_dict)
                master_dict[convert_to_sinlge_node_array[0]].push(temp_dict)
           }
           else{
                let temp_dict ={}
                let temp_array=[]
                temp_dict["node"]=convert_to_sinlge_node_array[1]
                temp_dict["value"]=convert_to_sinlge_node_array[2]
                temp_array.push(temp_dict)
                master_dict[convert_to_sinlge_node_array[0]]=temp_array
           }

          });
        return master_dict;
    },
    /*
    wrapper function for case 01
    input : data: string
    output: string
    */
    case01: function(data){
        let convert_to_sinlge_node_array = data.data.split("-")
        let master_dict = this.return_dict();
        
        let total_cost=0;
        let count=1;
        for (let i=0;i<convert_to_sinlge_node_array.length;i++){
            if (convert_to_sinlge_node_array[i] in master_dict){
                _.forEach(master_dict[convert_to_sinlge_node_array[i]], function(value) {
                    
                    if(value.node == convert_to_sinlge_node_array[i+1]){
                        
                        total_cost = total_cost + parseInt(value.value)+0;
                        count++;
                    }
                });
                
        }
    }
    if (count < convert_to_sinlge_node_array.length){
        return "No Such Route"
    }
    else{
        return "Cost is "+total_cost
    }
    
    },
    /*
    wrapper function for case 02
    input : data: string
    output: string
    */
    case02: function(data){
        let convert_to_sinlge_node_array = data.data.split("-");
        let from = convert_to_sinlge_node_array[0];
        let to = convert_to_sinlge_node_array[1];
        let count = 0;
        let master_dict = this.return_dict();
        let x= this;
            if (from in master_dict){
                _.forEach(master_dict[from], function(value) {
                    if(value.node != to){
                        let get_data =  x.recursivecall(value.node,to,from);
                        if (get_data.done==1){
                            count=count+get_data.count;
                            //console.log("ADDED1",count)
                        }
                    }
                    else{
                        count=count+1;
                        //console.log("ADDED2",count)

                    }
                });
        }
        return "Total count  is " + count
    },
     /*
    wrapper funtion for case03 
    input : data string
    output: string
    */
    case03: function(data){
        let convert_to_sinlge_node_array = data.data.split("-");
        let from = convert_to_sinlge_node_array[0];
        let to = convert_to_sinlge_node_array[1];
        let master_dict = this.return_dict();
        cost=0;
        s_cost=0
        visited=[];
        let x= this;
            if (from in master_dict){
                for(let i=0;i<master_dict[from].length;i++)
                {
                    visited.push(from)
                    //cyclic dependency check
                    if(from == master_dict[master_dict[from][i]["node"]][i]["node"]){
                        cost=cost+ parseInt(master_dict[master_dict[from][i]["node"]][i]["value"])+parseInt(master_dict[from][i]["value"]);
                    }
                    else{
                    
                        this.rec_fn(master_dict,master_dict[from][i]["node"],to,i,visited,s_cost);
                    
                            
                    }
                }
        }
        return "Minimum cost is " + cost
    },
    /*
    recursive funtion for case02 
    input : master_dict:object,data string,to string,i number 
    input : visited number,cost number
    output: number
    */
    rec_fn:function(master_dict,from,to,i,visited,cost){
        let x= this;
        let total_cost=0;
        let p=0;
        
            for(let i=0;i<master_dict[from].length;i++)
            {
                if(from!=to){
                if(!visited.includes(master_dict[from][i]["node"])){
                    //console.log(master_dict[from][i]["node"],master_dict[from][i]["value"])
                    cost=cost+ parseInt(master_dict[from][i]["value"]);
                        this.rec_fn(master_dict,master_dict[from][i]["node"],to,i,visited,cost);
                        
                    
                    
                }
            }else{
                    cost=cost+ parseInt(master_dict[from][i]["value"]);
                    total_cost=cost;
                   
                }

                
                
            }
            
        return total_cost-1;
    }, /*
    wrapper funtion for case03 last case
    input : data string
    output: string
    */
    case032: function(data){
        let convert_to_sinlge_node_array = data.data.split("-");
        let from = convert_to_sinlge_node_array[0];
        let to = convert_to_sinlge_node_array[1];
        let master_dict = this.return_dict();
        let cost=[];
        let s_cost=0
        let cost_arr=[]
        let visited=[];
        let get_cost;
        let x= this;
            if (from in master_dict){
                for(let i=0;i<master_dict[from].length;i++)
                {
                    visited.push(from)
                    //cyclic dependency check
                    if(from == master_dict[master_dict[from][i]["node"]][i]["node"]){
                        cost.push(parseInt(master_dict[master_dict[from][i]["node"]][i]["value"])+parseInt(master_dict[from][i]["value"]));
                    }
                    else{                   
                        get_cost = this.rec_fn_last(master_dict,master_dict[from][i]["node"],to,i,visited,s_cost,cost_arr);     
                        
                    }
                }
        }
    
        return "Minimum cost is " + this.compare_smallest_path(get_cost)[0]
    },
    /*
    recursive funtion for case03 
    input : master_dict:object,data string,to string,i number 
    input : visited number,cost number,cost_arr array 
    output: array
    */
    rec_fn_last:function(master_dict,from,to,i,visited,cost,cost_arr){
        let x= this;
        let total_cost=0;
        let p=0;
        
            for(let i=0;i<master_dict[from].length;i++)
            {
                if(from!=to){
                if(!visited.includes(master_dict[from][i]["node"])){
                    //console.log(master_dict[from][i]["node"],master_dict[from][i]["value"])
                    cost=cost+ parseInt(master_dict[from][i]["value"]);
                        this.rec_fn_last(master_dict,master_dict[from][i]["node"],to,i,visited,cost,cost_arr);
                        
                    
                    
                }
            }else{
                    cost=cost+ parseInt(master_dict[from][i]["value"]);
                    total_cost=cost;
                   
                }

                
                
            }
            cost_arr.push(total_cost-1)
            
        return cost_arr
        },
        /*
    function to return smalled number from array
    input : arr: array
    output: number
    */
        compare_smallest_path(arr){
            let sorted_array = _.sortBy(arr);
            return  sorted_array.filter(function(v) {
                return v > 0;
              });
        },
        /*
    wrapper funtion for case02 count max 4
    input : data string
    output: dict
    */
    case022: function(data){
        let convert_to_sinlge_node_array = data.data.split("-");
        let from = convert_to_sinlge_node_array[0];
        let to = convert_to_sinlge_node_array[1];
        let count = 0;
        let master_dict = this.return_dict();
        let x= this;
        let reached=1;
            if (from in master_dict){
                _.forEach(master_dict[from], function(value) {
                    if(value.node != to){
                        let get_data =  x.recursivecall(value.node,to,from);
                        if (get_data.done==1){
                            if(reached==1){
                                reached++;
                                count++;
                            }
                            count=count+get_data.count;
                            
                            
                        }
                    }
                    else{
                        count=count+1;
                        

                    }
                });
        }
        return "Total count  is " + count
    },
    /*
    wrapper funtion for case02 bonus case count max 20
    input : data string
    output: dict
    */
    case023: function(data){
        let convert_to_sinlge_node_array = data.data.split("-");
        let from = convert_to_sinlge_node_array[0];
        let to = convert_to_sinlge_node_array[1];
        let count = 1;
        let master_dict = this.return_dict();
        let x= this;
        let reached=1;
            if (from in master_dict){
                _.forEach(master_dict[from], function(value) {
                    count++;
                    if(value.node != to){
                        count++;
                        let get_data =  x.recursivecall023(value.node,to,from,count);
                        if (get_data.done==1){
                            count=count+get_data.count;
                        }
                    }
                    else{
                        count=count+1;
                    }
                });
        }
        return "Total count  is " + count
    },
      /*
    recursive funtion for case02 bonus case count max 20
    input : data string,to string,from string,count number
    output: dict
    */
    recursivecall023:function(data,to,from,count){
        let master_dict = this.return_dict();
        let x= this;
        let done = 0;
        if (data in master_dict ){
            _.forEach(master_dict[data], function(value) {
                count++;
                    if(value.node != to){
                        count++;
                        if (count<21){
                            count++;
                            x.recursivecall023(value.node,to,from,count);
                        } 
                    }
                    else{
                        count=count+1;
                       
                    }
            
            });
        }
        
        if (count>0){
            return {done:1,count:count};
        }
        return {done:0,count:0};
    },
      /*
    recursive funtion for case 01 count <4
    input : data string,to string,from string
    output: dict
    */
    recursivecall:function(data,to,from){
        let master_dict = this.return_dict();
        let x= this;
        count=0;
        let done = 0;
        if (data in master_dict ){
            _.forEach(master_dict[data], function(value) {
                if(value.node !=from){
                    if(value.node != to){
                        if (count<4){
                            x.recursivecall(value.node,to,from);
                        } 
                    }
                    else{
                        count=count+1;
                        
                    }
            }
            else{
                count=count+2;
                
            }

                
            });
        }
        
        if (count>0){
            return {done:1,count:count};
        }
        return {done:0,count:0};
    },
    /*
    recursive funtion for case 02 count <4
    input : data string,to string,from string
    output: dict
    */
    recursivecall_VAL:function(data,to,from){
        let master_dict = this.return_dict();
        let x= this;
        count=0;
        let done = 0;
        if (data in master_dict ){
            _.forEach(master_dict[data], function(value) {
                if(value.node !=from){
                    if(value.node != to){
                        if (count<4){
                            x.recursivecall(value.node,to,from);
                        } 
                    }
                    else{
                        count=count+value.value;
                        
                    }
            }
            else{
                count=count+value.value;
                
            }

                
            });
        }
        
        if (count>0){
            return {done:1,count:count};
        }
        return {done:0,count:0};
    }


};
