// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Constants for the classroom domain.
 */

export const ClassroomDomainConstants = {
  TOPICS_TO_CLASSROOM_RELATION_HANDLER_URL: '/topics_to_classrooms_relation',
  ALL_CLASSROOMS_SUMMARY_HANDLER_URL: '/all_classrooms_summary',
  CLASSROOOM_DATA_URL_TEMPLATE:
    '/classroom_data_handler/<classroom_url_fragment>',
  TOPIC_VIEWER_URL_TEMPLATE:
    '/learn/<classroom_url_fragment>/<topic_url_fragment>',
  TOPIC_VIEWER_REVISION_URL_TEMPLATE:
    '/learn/<classroom_url_fragment>/<topic_url_fragment>/revision',
  TOPIC_VIEWER_STORY_URL_TEMPLATE:
    '/learn/<classroom_url_fragment>/<topic_url_fragment>/story',
  CLASSROOM_HANDLER_URL_TEMPLATE: '/classroom/<classroom_id>',
  NEW_CLASSROOM_HANDLER_URL: '/classroom_admin/create_new',
  NEW_CLASSROOM_ID_HANDLER_URL_TEMPLATE: '/new_classroom_id_handler',
  CLASSROOM_DISPLAY_INFO_HANDLER_URL_TEMPLATE:
    '/classroom_display_info_handler',
} as const;
