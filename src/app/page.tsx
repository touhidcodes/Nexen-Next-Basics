import React from "react";
import {
  CheckCircle,
  Plus,
  Calendar,
  Users,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TodoHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="mb-8 bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200">
              <Star className="w-3 h-3 mr-1" />
              New: AI-powered task suggestions
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              Organize Your
              <span className="block bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
                Perfect Day
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform chaos into clarity. TaskFlow helps you capture,
              organize, and complete tasks with an intuitive interface that
              adapts to your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-lg px-8 py-6 group text-white"
              >
                Start Organizing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-black hover:bg-gray-100 text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="mt-20 relative">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl border border-gray-300 backdrop-blur-sm p-8 shadow-xl">
              <div className="bg-white/80 rounded-xl p-6 space-y-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-black font-semibold">Today's Tasks</h3>
                  <Plus className="w-5 h-5 text-gray-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span className="text-gray-600 line-through">
                      Review project proposal
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                    <span className="text-black">
                      Design new homepage layout
                    </span>
                    <Badge className="ml-auto bg-gray-800 text-white border-gray-700">
                      High
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                    <span className="text-black">
                      Team sync meeting at 3 PM
                    </span>
                    <Calendar className="w-4 h-4 text-gray-600 ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Everything you need to stay productive
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Powerful features designed to help you focus on what matters most
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 backdrop-blur-sm hover:bg-gray-50 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">Smart Quick Add</CardTitle>
                <CardDescription className="text-gray-700">
                  Add tasks instantly with natural language processing and
                  automatic categorization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 backdrop-blur-sm hover:bg-gray-50 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">Smart Scheduling</CardTitle>
                <CardDescription className="text-gray-700">
                  AI-powered scheduling suggestions based on your habits and
                  priorities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 backdrop-blur-sm hover:bg-gray-50 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">Team Collaboration</CardTitle>
                <CardDescription className="text-gray-700">
                  Share projects and track progress together with seamless team
                  features
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to transform your productivity?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Join thousands of users who have already streamlined their workflow
            with TaskFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-lg px-8 py-6 text-white"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-black hover:bg-gray-100 text-lg px-8 py-6"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
