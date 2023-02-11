import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as amplify from "aws-cdk-lib/aws-amplify";

export class MyPortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyPortfolioQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const app = new amplify.CfnApp(this, "portfolio-site", {
      name: "gs-portfolio",
    });
  }
}
