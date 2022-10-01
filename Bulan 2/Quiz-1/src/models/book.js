export class Books{
    constructor(id, title,description,image_url,release_year,price,total_page,thickness){
      this.id = id
      this.title= title
      this.description = description
      this.image_url= image_url
      this.release_year = release_year
      this.price = price
      this.total_page = total_page
      this.thickness = thickness
      this.created_at= null
      this.updated_at= null
      this.category_id= null
    }
  }

      