UPDATE Products
SET imgurl = $2, name = $3, price = $4
WHERE product_id = $1;