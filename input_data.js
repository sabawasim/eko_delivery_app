module.exports = {
    data_array: function() {
        let data = "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1";
        let convert_to_array = data.split(",");
        return convert_to_array
    }
};