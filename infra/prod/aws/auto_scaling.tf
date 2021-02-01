resource "aws_launch_template" "name" {
  name_prefix            = "gomushin_template"
  description            = "template for auto scaling"
  image_id               = "ami-0e67aff698cb24c1d"
  instance_type          = "t2.micro"
  key_name               = "black-gomushin"
  vpc_security_group_ids = [ "sg-0ccf4b8f456baa91d" ]
}

resource "aws_autoscaling_group" "name" {
  availability_zones = ["ap-northeast-2a", "ap-northeast-2c"]
	desired_capacity   = 1
	min_size           = 1
	max_size           = 2

	launch_template {
		id      = "lt-0bcc8caf71ea0cafb"
		version = "$Latest"
	}
}