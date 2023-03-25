# CDK 배포하기
1. aws config 설정
2. cdk deploy
3. 끝!


# CloudFront 배포
1. build 후 dist 폴더 생성
2. 버킷으로 업로드 `aws s3 sync dist s3://portfolio-bucket-2023-03-25`
3. https://d21n5hpr2g72s4.cloudfront.net/ 에 접속
4. 끝!