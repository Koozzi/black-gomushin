resource "aws_instance" "front" {
  ami                    = var.ubuntu_1804
  key_name               = "black-gomushin"
  subnet_id              = "subnet-aad402c1"
  instance_type          = "t2.micro"

  vpc_security_group_ids = [
    "sg-068bf2ea682306b63"
  ]

  tags = {
	  Name = "Front"
  }
}

resource "aws_instance" "back" {
  ami                    = var.ubuntu_1804
  key_name               = "black-gomushin"
  subnet_id              = "subnet-aad402c1"
  instance_type          = "t2.micro"

  vpc_security_group_ids = [
    "sg-068bf2ea682306b63"
  ]

  tags = {
	  Name = "Back"
  }
}

resource "aws_instance" "admin" {
  ami                    = var.ubuntu_1804
  key_name               = "black-gomushin"
  subnet_id              = "subnet-aad402c1"
  instance_type          = "t2.micro"

  vpc_security_group_ids = [
    "sg-068bf2ea682306b63"
  ]

  tags = {
	  Name = "Admin"
  }
}