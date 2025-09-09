"use client";

import { Todo } from "@/types/todo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  Trash2,
} from "lucide-react";

interface TodoListViewProps {
  todos: Todo[];
  onToggleComplete?: (id: string, completed: boolean) => void;
  onDelete?: (id: string) => void;
  loading?: boolean;
}

const priorityConfig = {
  high: { color: "bg-red-100 text-red-800 border-red-200", icon: AlertCircle },
  medium: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: Clock,
  },
  low: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: Clock },
};

export const TodoListView = ({
  todos,
  onToggleComplete,
  onDelete,
  loading,
}: TodoListViewProps) => {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const getPriorityConfig = (priority: string) => {
    const normalized = priority.toLowerCase() as keyof typeof priorityConfig;
    return priorityConfig[normalized] || priorityConfig.medium;
  };

  if (loading) return <p>Loading...</p>;

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          My Todos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {completedCount} of {totalCount} tasks completed
        </p>
      </div>

      {/* Todos List */}
      <div className="space-y-4">
        {todos.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-500 dark:text-gray-400">
                <Clock className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No todos yet</h3>
                <p>Create your first todo to get started!</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          todos.map((todo) => {
            const priority = getPriorityConfig(todo.priority);
            const PriorityIcon = priority.icon;
            return (
              <Card
                key={todo._id}
                className={`transition-all duration-200 hover:shadow-lg ${
                  todo.completed
                    ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                    : "hover:shadow-md"
                }`}
              >
                <CardContent className="p-6 flex justify-between items-start">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className="mt-1 cursor-pointer"
                      onClick={() =>
                        onToggleComplete?.(todo._id, todo.completed)
                      }
                    >
                      {todo.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3
                        className={`font-medium text-lg ${
                          todo.completed
                            ? "text-green-800 dark:text-green-200 line-through"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        {todo.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <PriorityIcon className="h-4 w-4" />
                          <Badge
                            variant="secondary"
                            className={`${priority.color} text-xs font-medium`}
                          >
                            {todo.priority.charAt(0).toUpperCase() +
                              todo.priority.slice(1)}{" "}
                            Priority
                          </Badge>
                        </div>

                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(todo.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-end">
                    <Badge
                      variant={todo.completed ? "default" : "secondary"}
                      className={
                        todo.completed
                          ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                          : "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200 cursor-pointer"
                      }
                      onClick={() =>
                        onToggleComplete?.(todo._id, todo.completed)
                      }
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </Badge>

                    <Trash2
                      className="h-5 w-5 text-red-600 hover:text-red-800 cursor-pointer"
                      onClick={() => onDelete?.(todo._id)}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};
